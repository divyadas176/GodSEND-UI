import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegisterUserService } from 'src/app/services/register-user.service';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
      userForm! : FormGroup
      errorMsg : string=""
      logginedUserID : any ="1"
  registeredUserID: any="2";
 

      constructor(private fb: FormBuilder, private router: Router, 
        private userAuthService : UserAuthenticationService,
      private registerUserService : RegisterUserService){}

      ngOnInit(){
        this.userForm = this.fb.group({
          userName : [''],
          password : ['']
        })
      }
      onLogin(){
        const user: User = this.userForm.value;
          this.userAuthService.isAuthenticated(user).subscribe(data=>{
            this.logginedUserID = data.userId
            this.router.navigate(['godsend/dashboard', this.logginedUserID])
          },error=>{
              this.errorMsg = error
              this.router.navigate(['godsend/dashboard', this.logginedUserID])
          })
          
      }

      onRegister(){
       
        const user: User = this.userForm.value;
        this.registerUserService.registerUser(user).subscribe(data=>{
          this.registeredUserID = data.userId
          this.router.navigate(['godsend/profile', this.registeredUserID])
        },error=>{
          this.router.navigate(['godsend/profile', this.registeredUserID])
        })



        
      }
      
}
