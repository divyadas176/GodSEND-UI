import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  errorMsg: any
  private url ="http://localhost:8080/godsend/users/authenticate"
  response: any;
  constructor(private http: HttpClient) { }

  isAuthenticated(form: User): any{
    const options= new HttpHeaders({'Content-Type':'application/json'})
    this.response = this.http.post<any>(this.url,form ,{headers: options}).pipe(catchError(this.errorHandler))
    return this.response
}

private errorHandler(err: HttpErrorResponse): any{
  let errorMsg: string;

    if (err.status === 401 && err.error && err.error.message) {
      // Extract the error message from the backend response
      errorMsg = err.error.message;
      console.log("Hurrayyyy : ", errorMsg)
    } else {
      errorMsg = 'An unexpected error occurred';
    }

   

    return throwError(() => new Error(errorMsg));

}
}
