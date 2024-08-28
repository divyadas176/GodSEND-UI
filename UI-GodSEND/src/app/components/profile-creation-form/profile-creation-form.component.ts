import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  userID : any
 formData: any
  constructor(private fb: FormBuilder, private router: Router, 
    private activatedRoute: ActivatedRoute,
    private createProfileService : CreateProfileService){}

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
    // Extract form data as a plain object
    this.formData = this.profileForm.value;
    this.createProfileService.createProfile(this.formData).subscribe(data=>{
       console.log("data in profile: ", data)
        this.successData=data,
        this.profileCreationSuccessMsg = data.message
        this.userID = this.createProfileService.getUserID()
        console.log("Profile creation Success")
       // this.router.navigate(['../../dashboard', this.userID])
       this.router.navigate(['../../dashboard', this.userID], { relativeTo: this.activatedRoute });
    },(error)=>{
        
        console.log("Error, Profile creation failed with " )
        //this.router.navigate(['../../dashboard', this.userID])
    })
  }
}
