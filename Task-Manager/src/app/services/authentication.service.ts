import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../../models/user.model";
import {GatewayConfig} from "../app.config";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  public userSubject = new Subject<User>();
  public user: User;
  public isLoggedIn = false;
  private baseUrl: string;

  constructor(private http: Http, private gatewayConfig: GatewayConfig) {
    this.baseUrl = `http://${gatewayConfig.ip}:${gatewayConfig.port}`;
  }

    forgotPassword(user: User){
      return this.http.put(this.baseUrl + '/api/authenticate', {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname
      })
      .map((response: Response) => {
        const obj = response.json();
        // tslint:disable-next-line:no-shadowed-variable
        if (response && obj) {
          return response;
          // localStorage.setItem('currentUser', JSON.stringify(obj));
          // localStorage.setItem('currentUserId', JSON.stringify(id));
          // localStorage.setItem('isLoggedIn', 'true');
          // this.user = <User> Object.assign(true, {}, obj);
          // this.userSubject.next(this.user);
          // this.isLoggedIn = true;
        }
      });
    }

    login(email: string, password: string) {
    return this.http.post(this.baseUrl + '/api/authenticate', { email: email, password: password })
      .map((response: Response) => {
        const obj = response.json();
        // tslint:disable-next-line:no-shadowed-variable
        const id = obj.id;
        if (response && obj) {
          localStorage.setItem('currentUser', JSON.stringify(obj));
          localStorage.setItem('currentUserId', JSON.stringify(id));
          localStorage.setItem('isLoggedIn', 'true');
          this.user = <User> Object.assign(true, {}, obj);
          this.userSubject.next(this.user);
          this.isLoggedIn = true;
        }
      });
  }


  validate(): boolean {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (this.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.userSubject.next(this.user);
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
