import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserProfile } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {
  private url : string= ""
  response : any
  constructor(private http: HttpClient ) { }

  createProfile(form: any): Observable<any>{
      const options= new HttpHeaders({'Content-Type':'application/json'})
      this.response = this.http.post<UserProfile>(this.url,form ,{headers: options}).pipe(catchError(this.errorHandler))
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
