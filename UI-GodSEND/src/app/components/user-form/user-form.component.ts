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
      loginErrorMsg : string=""
      logginedUserID : any ="1"
      registerErrorMsg : string=""
      registeredUserID: any="2";
      registerd : boolean = false
 

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
            console.log("User is found")
            this.router.navigate(['godsend/dashboard', this.logginedUserID])
          },error=>{
              this.loginErrorMsg = error
              console.log(this.loginErrorMsg)
              console.log("Error, User not found")
          })
          
      }

      onRegister(){
       
        const user: User = this.userForm.value;
        this.registerUserService.registerUser(user).subscribe(data=>{
          console.log("data received : ", data)
          this.registeredUserID = data.userID
          console.log("User is Registered with userID: ", this.registeredUserID)
          this.router.navigate(['godsend/profile', this.registeredUserID])
          console.log("Routed")
        },error=>{
          // this.registerErrorMsg = "Please Register First"
          // console.log("mine : ", this.registerErrorMsg)
          console.log(error)
         console.log("heyyyyyy :" )
          // console.log("Error, User is not Registered")
        })



        
      }
      
}
