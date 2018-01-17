import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm-register',
  templateUrl: './pm-register.component.html',
  styleUrls: ['./pm-register.component.css']
})
export class PmRegisterComponent implements OnInit {
  gender = "male";
  fname = '';
  lname = '';
  email = '';
  password = '';
  vpassword = '';
  userModel = new User();
  err = "";
  loading = false;
  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.err = "";
    this.userModel.firstname = this.fname;
    this.userModel.lastname = this.lname;
    this.userModel.email = this.email;
    this.userModel.password = this.password;
    this.userModel.gender = this.gender;
    this.userService.register(this.userModel).subscribe(
      data => {
      },
      error => {
        this.err = error._body;
        this.loading = false;
      });
  }
}
