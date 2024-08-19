import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProfileService } from 'src/app/services/create-profile.service';

@Component({
  selector: 'app-profile-creation-form',
  templateUrl: './profile-creation-form.component.html',
  styleUrls: ['./profile-creation-form.component.css']
})
export class ProfileCreationFormComponent {
  profileForm! : FormGroup
  diseaseCategories =['abc', 'xyz','pqr']
  successData : any
  errorData : any

  constructor(private fb: FormBuilder, private router: Router, private createProfileService : CreateProfileService){}

  ngOnInit(){
    this.profileForm = this.fb.group({
      parentName : [''],
      address : [''],
      childName :[''],
      childAge : [],
      diseaseCategory :['']
    })
  }

  onSubmit(){
    this.createProfileService.createProfile(this.profileForm).subscribe((data)=>{
        this.successData=data
    },(error)=>{
        this.errorData = error
    })
  }
}
