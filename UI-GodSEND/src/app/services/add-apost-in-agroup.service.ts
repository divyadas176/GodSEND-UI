import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAPostInAGroupService {
  private url ="http://localhost:8080/godsend"
  response: any
  constructor(private http: HttpClient) { }

  addAPost(groupID, form){
      let postURL = `${this.url}/${groupID}/posts`
      this.response= this.http.post<any>(postURL, form)
      return this.response
  }
}
