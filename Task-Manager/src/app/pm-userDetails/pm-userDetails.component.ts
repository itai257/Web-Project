import { AuthenticationService } from './../services/authentication.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pm-userdetails',
  templateUrl: './pm-userDetails.component.html',
  styleUrls: ['./pm-userDetails.component.css']
})
export class PmUserDetailsComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  vpassword: string;
  currUser: User;
  updateUser: User;
  err = "";
  succ = "";
  loading = false;
  constructor(private router: Router,
              private userservice: UserService, private authenticationService: AuthenticationService) {
  }


  ngOnInit() {
    this.currUser = JSON.parse(localStorage.getItem('currentUser'));
    this.firstName = this.currUser.firstname;
    this.lastName = this.currUser.lastname;
    this.email = this.currUser.email;
  }

  updateDetails() {
            this.err = this.succ = "";
             this.loading = true;
              this.updateUser = new User();
              this.updateUser.firstname = this.firstName;
              this.updateUser.lastname = this.lastName;
              this.updateUser.password = this.password;
              this.userservice.updateDetails(this.updateUser).subscribe(     response => {
                this.currUser = <User>Object.assign(true, {}, response.json());
                this.authenticationService.logout();
                this.authenticationService.login(this.currUser.email, this.currUser.password).subscribe(
                  d => {
                    this.loading = false;
                    this.router.navigate(['/userdetails']);
                    this.succ = "User updated!";
                  },
                  error => { // if registratin succeedded but login didnt then go to login page
                    this.router.navigate(['/login']);
                  });
          },
          error => {
            this.err = error._body;
          });
  }

}
