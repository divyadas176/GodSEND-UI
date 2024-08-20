import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; 

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  calendarOptions!: CalendarOptions;

  events = [
    { title: 'Event 1', date: '2024-08-17' },
    { title: 'Event 2', date: '2024-08-20' }
    // Add more events as needed
  ];

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      events: this.events,
     // dateClick: this.handleDateClick.bind(this) // Use .bind(this) to ensure 'this' context
    };
  }

  handleDateClick(arg: any): void {
    const clickedDate = arg.dateStr;
    const eventsOnDate = this.events.filter(event => event.date === clickedDate);
    if (eventsOnDate.length > 0) {
      alert(`Events on ${clickedDate}: ${eventsOnDate.map(e => e.title).join(', ')}`);
    } else {
      alert(`No events on ${clickedDate}`);
    }
  }
}
