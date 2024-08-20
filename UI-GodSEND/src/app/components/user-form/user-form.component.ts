import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
      userForm! : FormGroup
      constructor(private fb: FormBuilder, private router: Router){}

      ngOnInit(){
        this.userForm = this.fb.group({
          userName : [''],
          password : ['']
        })
      }
      onLogin(){
          this.router.navigate(['profile'])
      }

      onRegister(){
        this.router.navigate(['dashboard'])
      }
      
}
