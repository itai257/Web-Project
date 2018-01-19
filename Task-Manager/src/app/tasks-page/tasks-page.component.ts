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
 _tasksFilter: string;
 filteredTasks: Task[];
 allTasks: Task[];
 sortByfilter = "none";
  constructor(private listService: ListService, private tasksService: TasksService, private router: Router) { }


  sortTasks(filter: string) {
    this.sortByfilter = filter;
    if (filter === "task name") {
          this.currentTasks_open = this.currentTasks_open.sort(( a, b) => (a.title > b.title ? 1 : -1));
          this.currentTasks_doing = this.currentTasks_doing.sort(( a, b) => (a.title > b.title ? 1 : -1));
          this.currentTasks_done = this.currentTasks_done.sort(( a, b) => (a.title > b.title ? 1 : -1));
    }
    if (filter === "start date") {
      this.currentTasks_open = this.currentTasks_open.sort(( a, b) => {
        if (a.start_date == null) {
          return 1;
        }
        if (b.start_date == null) {
          return -1;
        }
        return (a.start_date > b.start_date ? 1 : -1);
    });
      this.currentTasks_doing = this.currentTasks_doing.sort(( a, b) => {
                                        if (a.start_date == null) {
                                          return 1;
                                        }
                                        if (b.start_date == null) {
                                          return -1;
                                        }
                                        return (a.start_date > b.start_date ? 1 : -1);
                                    });
      this.currentTasks_done = this.currentTasks_done.sort(( a, b) => {
        if (a.start_date == null) {
          return 1;
        }
        if (b.start_date == null) {
          return -1;
        }
        return (a.start_date > b.start_date ? 1 : -1);
    });
      }
    if (filter === "end date") {
        this.currentTasks_open = this.currentTasks_open.sort(( a, b) => {
          if (a.end_date == null) {
            return 1;
          }
          if (b.end_date == null) {
            return -1;
          }
          return (a.end_date > b.end_date ? 1 : -1);
      });
        this.currentTasks_doing = this.currentTasks_doing.sort(( a, b) => {
          if (a.end_date == null) {
            return 1;
          }
          if (b.end_date == null) {
            return -1;
          }
          return (a.end_date > b.end_date ? 1 : -1);
      });
        this.currentTasks_done = this.currentTasks_done.sort(( a, b) => {
          if (a.end_date == null) {
            return 1;
          }
          if (b.end_date == null) {
            return -1;
          }
          return (a.end_date > b.end_date ? 1 : -1);
      });
        }
  }
  get tasksFilter(): string{
    return this._tasksFilter;
  }
  set tasksFilter(value: string){
    this._tasksFilter = value;
    this.filteredTasks = this._tasksFilter ? this.performFilter(this._tasksFilter) : this.allTasks;
    this.assignTasks(this.filteredTasks);
  }
  ngOnInit() {
    this.currentTasks_open = [];
    this.currentTasks_doing = [];
    this.currentTasks_done = [];
    this.listService.getAllLists(localStorage.getItem('currentUserId'))
    .subscribe(list => {
      this.Lists = list;
      if (this.Lists.length > 0) {
        this.selectedList = this.selectedList ? this.selectedList : this.Lists[0].id;
            this.tasksService.getAllTasks(this.selectedList).subscribe(
              task => {
                this.filteredTasks = task;
                this.allTasks = task;
                this._tasksFilter = "";
                this.assignTasks(task);
              }
            );
      }
    },
    error => this.errorMessage = <any> error);

  }
  performFilter(filter: string): Task[] {
    filter = filter.toLocaleLowerCase();
    return this.allTasks.filter((task: Task) =>
        task.title.toLocaleLowerCase().indexOf(filter) !== -1);
  }
deleteList(listid) {
if(listid === this.selectedList) this.selectedList = "";
this.listService.deleteList(listid)
  .subscribe(data => {
        this.ngOnInit();
}
 , error => this.errorMessage = <any> error);


}
  assignTasks(tasks: Task[]) {
    this.sortByfilter = "none";
      while (this.currentTasks_doing.length > 0)
      this.currentTasks_doing.pop();
  while (this.currentTasks_open.length > 0)
      this.currentTasks_open.pop();
  while (this.currentTasks_done.length > 0)
      this.currentTasks_done.pop();
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
        this.filteredTasks = task;
        this.allTasks = task;
        this._tasksFilter = "";
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
            this.Lists.push(data);
            this.replaceList(data.id);
            this.selectedList = data.id;
      },
      error => {
        this.err = error._body;
      });

  }

  ngOnChange() {
  }

  addNewTask(el: Task, stat: string) {
    el.list_id = this.selectedList;
    el.status = stat;
    this.tasksService.addNewTask(el).subscribe(
      data => {
            this.replaceList(this.selectedList);
      },
      error => {
        this.err = error._body;
      });
  }

  deleteTask(el: Task){
      this.tasksService.deleteTask(el).subscribe(      data => {
        this.replaceList(this.selectedList);
  },
  error => {
    this.err = error._body;
  });
  }

  moveTask(el: Task){
    this.tasksService.moveTask(el).subscribe(      data => {
      this.replaceList(this.selectedList);
},
error => {
  this.err = error._body;
});
  }
}
