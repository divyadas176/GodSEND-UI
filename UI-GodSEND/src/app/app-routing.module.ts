import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileCreationFormComponent } from './components/profile-creation-form/profile-creation-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { compareByFieldSpecs } from '@fullcalendar/core/internal';
import { GroupCreationComponent } from './components/group-creation/group-creation.component';
import { EventCreationComponent } from './components/event-creation/event-creation.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'profile', component: ProfileCreationFormComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'add-group',
        component: GroupCreationComponent,
      },
      {
        path: 'add-event',
        component: EventCreationComponent,
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
