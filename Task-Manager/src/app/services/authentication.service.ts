import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../../models/user.model";
import {GatewayConfig} from "../app.config";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationService {
  user = new User();
  public isLoggedIn = false;
  private baseUrl: string;

  constructor(private http: Http, private gatewayConfig: GatewayConfig) {
    this.baseUrl = `http://${gatewayConfig.ip}:${gatewayConfig.port}`;
  }


    login(email: string, password: string) {
    return this.http.post(this.baseUrl + '/api/authenticate', { email: email, password: password })
      .map((response: Response) => {
        const obj = response.json();
        // tslint:disable-next-line:no-shadowed-variable
        const email = obj.email;
        const id = obj.id;
        if (response && obj) {
          localStorage.setItem('currentUser', JSON.stringify(email));
          localStorage.setItem('currentUserId', JSON.stringify(id));
          localStorage.setItem('isLoggedIn', 'true');
          this.user = <User> Object.assign(true, {}, email);
          this.isLoggedIn = true;
        }
      });
  }

  validate(): boolean {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (this.isLoggedIn) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      this.user = Object.assign(true, {}, user);
      if (!this.user)
          return false;
    }
   return this.isLoggedIn;
  }

  logout() {
    // remove user from local storage to log user out
    this.isLoggedIn = false;
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserId');
  }
}
