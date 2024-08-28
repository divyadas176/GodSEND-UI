import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplayToAPostService {

  private url ="http://localhost:8080/godsend"
  response: any
  constructor(private http: HttpClient) { }

  replayToAPost(groupID, form){
      let replyURL = `${this.url}/${groupID}/reply`
      this.response= this.http.post<any>(replyURL, form)
      return this.response
  }
}
