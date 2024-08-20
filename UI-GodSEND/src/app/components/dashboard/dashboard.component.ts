import {  Component } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core'; 

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { EventsForUser } from 'src/app/models/eventsForUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
  constructor(private router : Router, private activateRoute : ActivatedRoute){}
  ngOnInit() {}
  parent : boolean=true
  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
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

  
}
