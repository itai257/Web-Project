import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { User } from '../../models/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pm-login',
  templateUrl: './pm-login.component.html',
  styleUrls: ['./pm-login.component.css']
})
export class PmLoginComponent implements OnInit {
  email: string;
  password: string;
  err = "";

  model: any = {};
  loading = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }


  ngOnInit() {
      this.authenticationService.logout();
  }
  login() {
    this.err = "";
    this.loading = true;
    this.model.email = this.email;
    this.model.password = this.password;
    this.authenticationService.login(this.model.email, this.model.password).subscribe(
      data => {
       // this.alertService.success('התחבר בהצלחה');
        this.router.navigate(['/']);
      },
      error => {
        this.err = error._body;
        this.loading = false;
      });
  }
}
