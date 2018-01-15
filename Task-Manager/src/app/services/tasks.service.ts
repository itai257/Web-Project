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

   addNewTask(task: Task) {
    return this.http.post(this.baseUrl + '/api/List_tasks/', {
      title: task.title,
      start_date: task.start_date,
      end_date: task.end_date,
      list_id: task.list_id,
      status: task.status
    }).map((response: Response) =>
        <Task>response.json()
      );
   }

}
