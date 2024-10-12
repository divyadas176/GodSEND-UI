import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { catchError, map, Observable, throwError } from 'rxjs';
import { RegisterUserResponse } from '../models/registerUserResponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
   private url="http://localhost:8080/godsend/users/register"
  response: any;
  errorMsg: any;
  constructor(private http: HttpClient) { }

  registerUser(form: User): Observable<any>{
    const options= new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post<RegisterUserResponse>(this.url, form, {headers: options}).pipe(
      map(response => {
        console.log("response got :",response)
        
        
        console.log("response message got :",response.message)
        sessionStorage.setItem('userID', response.userID);
        console.log("In reg Service : userID : " , response.userID)
        return response;
      })
    );
  }

  
}
