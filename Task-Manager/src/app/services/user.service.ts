import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {GatewayConfig} from "../app.config";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {

  private baseUrl: string;

  constructor(private http: Http, private gatewayConfig: GatewayConfig, private authenticationService: AuthenticationService,
     private router: Router) {
    this.baseUrl = `http://${gatewayConfig.ip}:${gatewayConfig.port}`;
  }

  register(user: User) {
    return this.http.post(this.baseUrl + '/api/user', {
      firstName: user.firstname,
      LastName: user.lastname,
      email: user.email,
      password: user.password
    })
      .map((response: Response) => {
        const obj = response.json();
        // tslint:disable-next-line:no-shadowed-variable
        const email = obj.email;
        const password = obj.password;
        if (response && obj) {
          this.authenticationService.login(email, password).subscribe(
            data => {
              this.router.navigate(['/']);
            },
            error => { // if registratin succeedded but login didnt then go to login page
              this.router.navigate(['/login']);
            });
        }
      });
  }

}
