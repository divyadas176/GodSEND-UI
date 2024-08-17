import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  groups=[
    {"name": "Group1", "description": "xyz description"},
    {"name": "Group2", "description": "pqr description"}
  ]
  events =[
    {"name":"Event1", "host":"host1","address" :"address1"},
    {"name":"Event2", "host":"host2","address" :"address2"}
  ]
}
