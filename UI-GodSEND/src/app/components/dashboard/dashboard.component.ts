import {  Component } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core'; 

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { EventsForUser } from 'src/app/models/eventsForUser';
import { GetAllGroupsService } from 'src/app/services/get-all-groups.service';
import { GetAllGroupsForAUserService } from 'src/app/services/get-all-groups-for-auser.service';
import { JoinAGroupService } from 'src/app/services/join-agroup.service';
import { ReplayToAPostService } from 'src/app/services/replay-to-apost.service';
import { AddAPostInAGroupService } from 'src/app/services/add-apost-in-agroup.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  groupsAvailable : any
  groupsInWhichUserIsAMember : any 
  extractedGroup : any
  grpsHavingPosts : any
  availGrpIDs : any
  userJoinedGrpIDs : any
  userID : any
  joined : boolean = false
  isInDashboard : boolean = true
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], // Configure plugins
    initialView: 'dayGridMonth', // Default view
    dateClick: this.handleDateClick.bind(this), // Handle date click

    events: [
      // Example events
      { title: 'Event 1', date: '2024-08-17' },
      { title: 'Event 2', date: '2024-08-18' }
    ]
  };
  constructor(private router : Router, private activateRoute : ActivatedRoute,
    private getAllGroupsService : GetAllGroupsService,
    private getAllGroupsForAUserService: GetAllGroupsForAUserService,
    private joinAGroupService: JoinAGroupService,
    private replayToAPostService: ReplayToAPostService,
    private addAPostInAGroupService : AddAPostInAGroupService
  ){}
  ngOnInit() {
      
      this.getAllGroupsService.getAllGroups().subscribe(data=>{
        this.groupsAvailable = data
        this.availGrpIDs = this.groupsAvailable.map(group=> group.groupId)
        console.log("Got All Groups for this user")
      }, error=>{
        console.log("Error, Failed to get all groups for the user")
      })

      this.activateRoute.paramMap.subscribe(params=>{
          this.userID = params.get('id')
          
      })

      this.getAllGroupsForAUserService.getAllGroups(this.userID).subscribe(data=>{
        this.groupsInWhichUserIsAMember = data
        console.log(this.groupsInWhichUserIsAMember)
        this.extractedGroup = this.groupsInWhichUserIsAMember.groups
        console.log(this.extractedGroup)
        this.grpsHavingPosts = this.extractedGroup.filter(group => group.groupPosts.length > 0);
        this.userJoinedGrpIDs = this.extractedGroup.map(group => group.groupId)
        console.log("user is memeber in these groups : ")
        console.log(this.groupsInWhichUserIsAMember)

        console.log(this.extractedGroup)
      })


    
    
  }
  parent : boolean=true
  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }

  isUserMember(group: any): boolean {
    return this.userJoinedGrpIDs && this.userJoinedGrpIDs.includes(group.groupId);
  }
  




  groups=[
    {"name": "Group1", "description": "xyz description", isJoined: false},
    {"name": "Group2", "description": "pqr description",isJoined: false}
  ]
  events =[
    {"name":"Event1", "description": "xyx", "host":"host1","address" :"address1" , isInterested: false},
    {"name":"Event2", "description": "xyx", "host":"host2","address" :"address2", isInterested: false}
  ]


  addANewGroup(){
     this.parent=false
     

     this.router.navigate(['add-group'], { relativeTo: this.activateRoute })
  }

  addANewEvent(){
    this.parent=false
     this.router.navigate(['add-event'], { relativeTo: this.activateRoute })
  }
  isJoined = false; // To keep track of whether the user has joined the group
  showPopup = false; // To control the display of the pop-up
  groupName = '';
  onGroupJoin(group: Group){
     
    group.isJoined = true;  // Disable the button and change its color
    this.showPopup = true; // Show the pop-up
    this.groupName=group.name
  }

  onEventAttending(event: EventsForUser){
    event.isInterested = true
  }

  openADialog(){

  }

  joinGroup(groupID){
    if (this.userID) {
      this.joinAGroupService.joinAGroup(groupID, this.userID).subscribe({
        
        next: () => {
          console.log("User has joined a group");
          
          
        },
        error: (error) => console.log("Error joining group:", error)
      });
    }
  }
  showReplyForm: boolean = false;
  selectedGroupId: number | null = null;
  replyContent: string = '';

  onReplyBtn(grpID: any){
    this.showReplyForm = true;
    this.selectedGroupId = grpID;
  }

  submitReply(postId: any) {
    console.log(`Reply content: ${this.replyContent} for post ID: ${postId}`);
    // Add logic to save the reply here
    
    // Clear the form and hide it after submission
   
    let today = new Date()
    const formattedDate = today.toISOString().split('T')[0];
    this.replayToAPostService.replayToAPost(this.userID, postId,this.replyContent,formattedDate).subscribe(data=>{
      console.log("reply posted Successfully")
      this.replyContent = '';
      this.showReplyForm = false;
      this.selectedGroupId = null;
    })

    }

  showPostForm: boolean = false;
  selectedGrpId: number | null = null;
  postContent: string = '';

    addAPostToGroup(grpID: any){
      this.showPostForm = true;
    this.selectedGrpId = grpID;
    }

    submitPost(groupID){
      
      

      
      let today = new Date()
      const formattedDate = today.toISOString().split('T')[0];
      this.addAPostInAGroupService.addAPost(this.userID, groupID,this.postContent,formattedDate).subscribe(data=>{
        console.log("Posted Successfully")
        this.postContent = '';
      this.showPostForm = false;
      this.selectedGrpId = null;
      })

      
    }
  }

  
  


