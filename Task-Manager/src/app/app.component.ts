import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
  loggedin = this.authenticationService.isLoggedIn;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
}
ngOnInit(){
 // this.authenticationService.
}
}
