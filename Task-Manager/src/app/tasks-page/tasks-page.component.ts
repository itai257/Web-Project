import { Router } from '@angular/router';
import { TaskList } from './../../models/taskList.model';
import { Http } from '@angular/http';
import { ListService } from './../services/list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { TasksService } from '../services/tasks.service';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})

export class TasksPageComponent implements OnInit {
 Lists: TaskList[]= [];
 currentTasks_open: Task[] = [];
 currentTasks_doing: Task[]= [];
 currentTasks_done: Task[]= [];
 userId = localStorage.getItem('userId');
 errorMessage;
 selectedList;
 newListName;
 err = "";
  constructor(private listService: ListService, private tasksService: TasksService, private router: Router) { }

  ngOnInit() {
    this.listService.getAllLists(localStorage.getItem('currentUserId'))
    .subscribe(list => {
      this.Lists = list;
      if (this.Lists.length > 0) {
        this.selectedList = this.Lists[0].id;
            this.tasksService.getAllTasks(this.Lists[0].id).subscribe(
              task => {
                this.assignTasks(task);
              }
            );
      }
    },
    error => this.errorMessage = <any> error);

  }

deleteList(listid) {
  console.log(listid);
  
}
  assignTasks(tasks: Task[]) {
      for (const task of tasks){
          if (task.status === "open") {
            this.currentTasks_open.push(task);
          }else if (task.status === "doing") {
            this.currentTasks_doing.push(task);
          }else {
            this.currentTasks_done.push(task);
          }
      }
  }

  replaceList(listId) {
    this.selectedList = listId;
    while (this.currentTasks_doing.length > 0)
          this.currentTasks_doing.pop();
    while (this.currentTasks_open.length > 0)
          this.currentTasks_open.pop();
    while (this.currentTasks_done.length > 0)
          this.currentTasks_done.pop();
    this.tasksService.getAllTasks(listId).subscribe(
      task => {
        this.assignTasks(task);
      }
    );
  }

  addList(f) {
    const newList = new TaskList();
    newList.title = this.newListName;
    this.newListName = "";
    newList.user_id = localStorage.getItem('currentUserId');
    this.listService.addList(newList).subscribe(
      data => {
            console.log(data);
            this.Lists.push(data);
      },
      error => {
        this.err = error._body;
        //this.loading = false;
      });

  }

  ngOnChange(){
    console.log(this.Lists);
  }

  addNewTask(el: Task, stat: string) {
    console.log("task-page.component got the new task: ");
    console.log(el);
    el.list_id = this.selectedList;
    el.status = stat;
    //need to send to server
    this.tasksService.addNewTask(el).subscribe(
      data => {
            // console.log(data);
            // this.Lists.push(data);
      },
      error => {
        this.err = error._body;
        //this.loading = false;
      });
  }
}
