import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserProfile } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {
  private url : string= "http://localhost:8080/godsend/users/"
  response : any
  

  getUserID(): string | null {
    return sessionStorage.getItem('userID');
  }

  constructor(private http: HttpClient ) { }

  createProfile(form: any): Observable<any>{
     let userID =  this.getUserID()
     let postURL = this.url+userID+"/userprofile"
      const options= new HttpHeaders({'Content-Type':'application/json'})
      this.response = this.http.post<any>(postURL,form ,{headers: options}).pipe(catchError(this.errorHandler))
      return this.response
  }

  private errorHandler(err: HttpErrorResponse): any{
    let errMsg =''
    if(err.error instanceof Error){
      errMsg = err.error.message
    }
    return throwError(()=> err)
}


}
