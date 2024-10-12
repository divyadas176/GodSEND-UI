import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateGroupService } from 'src/app/services/create-group.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css']
})
export class GroupCreationComponent {
  groupForm! : FormGroup
  successData : any
  errorData : any

  constructor(private fb: FormBuilder, private router: Router, private createGroupService : CreateGroupService){}

  ngOnInit(){
    this.groupForm = this.fb.group({
      groupName : [''],
      description : ['']
    })
  }

  onGroupCreation(){
      this.createGroupService.createGroup(this.groupForm).subscribe(data=>{
        this.successData=data
        console.log("Group creation success")
      },error=>{
        this.errorData = error
        console.log("Error, Group creation faled")
      })
  }
}
