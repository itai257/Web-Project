import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {GatewayConfig} from "../app.config";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Task } from '../../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TasksService {

  private baseUrl: string;

  constructor(private http: HttpClient, private gatewayConfig: GatewayConfig) {
    this.baseUrl = `http://${gatewayConfig.ip}:${gatewayConfig.port}`;
  }
  getAllTasks(ListId): Observable<Task[]> {
    //
    return this.http.get<Task[]>(this.baseUrl + '/api/List_tasks/' + ListId);
   }


}
