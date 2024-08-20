import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileCreationFormComponent } from './components/profile-creation-form/profile-creation-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalenderComponent } from './components/calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { GroupCreationComponent } from './components/group-creation/group-creation.component';
import { EventCreationComponent } from './components/event-creation/event-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileCreationFormComponent,
    UserFormComponent,
    DashboardComponent,
    CalenderComponent,
    GroupCreationComponent,
    EventCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
