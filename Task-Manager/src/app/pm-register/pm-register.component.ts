import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm-register',
  templateUrl: './pm-register.component.html',
  styleUrls: ['./pm-register.component.css']
})
export class PmRegisterComponent implements OnInit {
  fname = '';
  lname = '';
  email = '';
  password = '';
  vpassword = '';
    uu = new User();
  constructor() { }

  ngOnInit() {
  }

}
