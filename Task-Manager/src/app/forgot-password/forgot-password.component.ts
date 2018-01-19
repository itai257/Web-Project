import { User } from './../../models/user.model';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  err = "";
  loading = false;
  succ = "";
  fname = "";
  lname = "";
  user: User = new User();
  constructor(private authenticationService: AuthenticationService) { }


  forgotPass() {
    this.succ = "";
    this.err = "";
    this.user.email = this.email;
    this.user.firstname = this.fname;
    this.user.lastname = this.lname;
    this.authenticationService.forgotPassword(this.user).subscribe(
      data => {

        this.succ = "your password is:" + data.json().password;
      },
      error => {
        this.err = error._body;
        this.loading = false;
      });
  }
  ngOnInit() {
  }

}
