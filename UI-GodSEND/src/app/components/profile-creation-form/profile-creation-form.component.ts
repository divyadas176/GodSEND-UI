import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-creation-form',
  templateUrl: './profile-creation-form.component.html',
  styleUrls: ['./profile-creation-form.component.css']
})
export class ProfileCreationFormComponent {
  profileForm! : FormGroup
  diseaseCategories =['abc', 'xyz','pqr']
  constructor(private fb: FormBuilder, private router: Router){}

  ngOnInit(){
    this.profileForm = this.fb.group({
      parentName : [''],
      address : [''],
      childName :[''],
      childAge : [],
      diseaseCategory :['']
    })
  }
}
