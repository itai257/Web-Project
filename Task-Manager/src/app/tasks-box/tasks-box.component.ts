import { Component, OnInit, OnChanges, Input} from '@angular/core';
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

  newListName: String;
  @Input() titleColor: string;
  @Input() boxTitle: string;
  @Input() boxId: string;
  @Input() tasks: Task[]= [];
  constructor() { }

  ngOnInit() {
  }



  addList(form: NgForm) {
    console.log(this.newListName);
  }
  ngOnChange() {

  }
}
