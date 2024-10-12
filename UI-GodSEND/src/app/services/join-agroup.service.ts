import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinAGroupService {

  private url ="http://localhost:8080/godsend/groups/"
  constructor(private http: HttpClient) { }

  formatDate(today){
    
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    console.log(typeof formattedDate)
    return formattedDate
  }

  joinAGroup(groupID, userID){
    
    let postURL = `${this.url}${groupID}/add`;
    let formattedDate = this.formatDate(new Date())

    const payload = {
      userId : Number(userID),
      joinedDate : formattedDate
    }
 // Set the headers if needed
 const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

    return this.http.post(postURL, payload, { headers }).pipe(
      catchError(this.handleError('joinAGroup', []))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
    
    

  }


}
