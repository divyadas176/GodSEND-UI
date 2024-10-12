import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllGroupsForAUserService {
  private url = "http://localhost:8080/godsend/users/"
  response : any
  extractedGroup : any
  constructor(private http: HttpClient) { }
  
  getAllGroups(userID: any): Observable<any>{
      const getURL = this.url+userID+"/groups"
      this.response= this.http.get<any>(getURL)
      console.log("Groups in which a user is memeber")
      console.log(this.response)
      return this.response
  }
}
