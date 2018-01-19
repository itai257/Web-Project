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
    this.task = new Task();
  }

  moveTask(task: Task) {
    this.moveTaskEvent.emit(task);
  }
  deleteSelectedTasks(){
    for (const taskid of this.selectedOpenTasksValues) {
        const taskToSend = this.tasks.filter(e => e.id == taskid);
        this.deleteTask(taskToSend[0]);
    }
    this.selectedOpenTasksValues = [];
  }
  deleteTask(task: Task) {
    this.deleteTaskEvent.emit(task);
  }
}
