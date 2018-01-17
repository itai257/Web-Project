import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { User } from '../../models/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pm-userDetails',
  templateUrl: './pm-userDetails.component.html',
  styleUrls: ['./pm-userDetails.component.css']
})
export class PmUserDetailsComponent implements OnInit {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }


  ngOnInit() {
  }

}
