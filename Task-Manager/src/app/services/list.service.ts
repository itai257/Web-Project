import { TaskList } from './../../models/taskList.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {GatewayConfig} from "../app.config";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { $ } from 'protractor';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ListService {
  //listUpdated: EventEmitter = new EventEmitter();
  private baseUrl: string;
  list: TaskList[] = [];
  test;
  constructor(private httpclient: HttpClient, private gatewayConfig: GatewayConfig, private http: Http) {
    this.baseUrl = `http://${gatewayConfig.ip}:${gatewayConfig.port}`;
  }

  getAllLists(id): Observable<TaskList[]> {
   //
   return this.httpclient.get<TaskList[]>(this.baseUrl + '/api/userlists/' + id);
  }

  addList(list: TaskList): Observable<TaskList> {

    return this.http.post(this.baseUrl + '/api/list', {
      title: list.title,
      user_id: list.user_id
    }).map((response: Response) =>
        <TaskList>response.json()
        // tslint:disable-next-line:no-shadowed-variable


      );


  }
}

