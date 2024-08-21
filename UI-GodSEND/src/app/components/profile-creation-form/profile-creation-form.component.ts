import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnyComponent } from '@fullcalendar/core/preact';
import { CreateProfileService } from 'src/app/services/create-profile.service';

@Component({
  selector: 'app-profile-creation-form',
  templateUrl: './profile-creation-form.component.html',
  styleUrls: ['./profile-creation-form.component.css']
})
export class ProfileCreationFormComponent {
  profileForm! : FormGroup
  diseaseCategories: string[] = [];
  successData : any
  errorData : any
  profileCreationSuccessMsg : string=""
  userID : AnyComponent

  constructor(private fb: FormBuilder, private router: Router, private createProfileService : CreateProfileService){}

  ngOnInit(){
    this.diseaseCategories = ['Rett syndrome', 'Kanner’s syndrome', 'PDD-NOS'];
    this.profileForm = this.fb.group({
      parentName : [''],
      email :[''],
      address : [''],
      childName :[''],
      childAge : [],
      childGender : [''],
      diseaseCategory :['']
    })
  }

  onSubmit(){
    console.log("creation of profile started")
    this.createProfileService.createProfile(this.profileForm).subscribe(data=>{
        this.successData=data,
        this.profileCreationSuccessMsg = data.message
        this.userID = data.userId
        this.router.navigate(['../../dashboard', this.userID])
    },(error)=>{
        this.errorData = error
        //this.router.navigate(['../../dashboard', this.userID])
    })
  }
}
