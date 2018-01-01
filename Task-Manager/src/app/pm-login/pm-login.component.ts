import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm-login',
  templateUrl: './pm-login.component.html',
  styleUrls: ['./pm-login.component.css']
})
export class PmLoginComponent implements OnInit {
  email: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

}
