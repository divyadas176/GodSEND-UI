import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllGroupsService {
  
  private getAllGrpsURL ="http://localhost:8080/godsend/group/groups"
  response : any
  constructor(private http: HttpClient) { }
   
  getAllGroups(){
    this.response = this.http.get<any>(this.getAllGrpsURL)
    return this.response
  }

}
