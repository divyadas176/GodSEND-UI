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
     console.log("postURL :", postURL)
      const options= new HttpHeaders({'Content-Type':'application/json'})
      this.response = this.http.post<any>(postURL,form ,{headers: options}).pipe(catchError(this.errorHandler))
      console.log(this.response)
      return this.response
  }

//   private errorHandler(err: HttpErrorResponse): any{
//     let errMsg =''
//     if(err.error instanceof Error){
//       errMsg = err.error.message
//       console.log(errMsg)
//     }
//     return throwError(()=> err)
// }

private errorHandler(err: HttpErrorResponse): any {
  let errMsg = '';
  
  // Check if the error is client-side or network-related
  if (err.error instanceof ErrorEvent) {
      // Client-side error
      errMsg = `Client-side error: ${err.error.message}`;
  } else {
      // Server-side error
      errMsg = `Server-side error: ${err.status} - ${err.message}`;
  }

  // Log the status code and error message
  console.error(`Error Status Code: ${err.status}\nMessage: ${errMsg}`);
  
  // Rethrow the error
  return throwError(() => new Error(errMsg));
}



}
