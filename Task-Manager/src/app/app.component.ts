import { User } from './../models/user.model';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { NavigationEnd, Event, Router } from "@angular/router";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task Manager';
  currentUser: User;
  hideTopBar = true;
  constructor(private router: Router,
    public authenticationService: AuthenticationService) {
      authenticationService.validate();
      router.events.filter(e => e instanceof NavigationEnd).subscribe((result: Event) => {
        this.hideTopBar = result['url'].indexOf("login") !== -1 || result['url'].indexOf("register") !== -1;
      });

}
  ngOnInit() {
    this.authenticationService.userSubject.subscribe(user => {
      this.currentUser = user;
     });
  }
}
