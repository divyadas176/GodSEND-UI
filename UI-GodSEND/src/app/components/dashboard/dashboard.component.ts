import {  Component } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core'; 

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], // Configure plugins
    initialView: 'dayGridMonth', // Default view
    dateClick: this.handleDateClick.bind(this), // Handle date click
    events: [
      // Example events
      { title: 'Event 1', date: '2024-08-17' },
      { title: 'Event 2', date: '2024-08-18' }
    ]
  };

  ngOnInit() {}

  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }





  groups=[
    {"name": "Group1", "description": "xyz description"},
    {"name": "Group2", "description": "pqr description"}
  ]
  events =[
    {"name":"Event1", "host":"host1","address" :"address1"},
    {"name":"Event2", "host":"host2","address" :"address2"}
  ]
 
}
