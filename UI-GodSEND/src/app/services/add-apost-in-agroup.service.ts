import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAPostInAGroupService {
  private url = "http://localhost:8080/godsend/groups"
  response: any
  constructor(private http: HttpClient) { }

  addAPost(userID, groupID, postContent, today) {
    let postURL = `${this.url}/${groupID}/posts`
    const postPayload = {
      userId: Number(userID),
      post: postContent,
      postAddeddate: today
    }
    this.response = this.http.post<any>(postURL, postPayload)
    return this.response
  }
}
