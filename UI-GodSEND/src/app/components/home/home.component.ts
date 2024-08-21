import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  showUserForm: boolean = true;

  constructor(private router: Router) { }

  
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl.startsWith('/godsend/dashboard') || currentUrl.startsWith('/godsend/profile')) {
        this.showUserForm = false;
      } else {
        this.showUserForm = true;
      }
    });
  }

  

  
}
