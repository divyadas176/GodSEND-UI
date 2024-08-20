import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateGroupService {

  private url : string= ""
  response : any
  constructor(private http: HttpClient ) { }

  createGroup(form: any): Observable<any>{
      const options= new HttpHeaders({'Content-Type':'application/json'})
      this.response = this.http.post<any>(this.url,form ,{headers: options}).pipe(catchError(this.errorHandler))
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
