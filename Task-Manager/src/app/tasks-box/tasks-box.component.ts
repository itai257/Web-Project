import { Component, OnInit, OnChanges, Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-tasks-box',
  templateUrl: './tasks-box.component.html',
  styleUrls: ['./tasks-box.component.css']
})
export class TasksBoxComponent implements OnInit {
  selectedOpenTasksValues: string[];
  task: Task = new Task();
  @Input() titleColor: string;
  @Input() boxTitle: string;
  @Input() boxId: string;
  @Input() tasks: Task[]= [];
  @Output() addTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() deleteTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() moveTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();
  err;
  constructor() { }

  ngOnInit() {
  }


  ngOnChange() {

  }
  addTask(form: NgForm) {
    this.err = "";
    if (this.task.start_date > this.task.end_date) {
        this.err = "starting date bigger than ending date";
        return;
    }
    this.addTaskEvent.emit(this.task);
  }

  moveTask(task: Task) {
    console.log(task);
    this.moveTaskEvent.emit(task);
  }

  deleteTask(task: Task) {
    console.log(task);
    this.deleteTaskEvent.emit(task);
  }
}
