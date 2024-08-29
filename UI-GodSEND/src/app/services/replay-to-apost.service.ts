import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplayToAPostService {

  private url = "http://localhost:8080/godsend/groups/post"
  response: any
  constructor(private http: HttpClient) { }

  replayToAPost(userID, postID, replyContent, today) {
    let replyURL = `${this.url}/${postID}/reply`
    const replyPayload = {
      userId: Number(userID),
      reply: replyContent,
      replyAddeddate: today
    }
    this.response = this.http.post<any>(replyURL, replyPayload)
    return this.response
  }
}
