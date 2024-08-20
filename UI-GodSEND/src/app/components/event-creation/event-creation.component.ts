import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateEventService } from 'src/app/services/create-event.service';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent {
  eventForm! : FormGroup
  successData : any
  errorData : any

  constructor(private fb: FormBuilder, private createEventService : CreateEventService){}

  ngOnInit(){
    this.eventForm = this.fb.group({
      eventName : [''],
      description : [''],
      host : [''],
      address : ['']
    })
  }

  onEventCreation(){
      this.createEventService.createEvent(this.eventForm).subscribe(data=>{
        this.successData=data
      },error=>{
        this.errorData = error
      })
  }
}
