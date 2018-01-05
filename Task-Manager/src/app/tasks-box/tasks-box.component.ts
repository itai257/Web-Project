import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-tasks-box',
  templateUrl: './tasks-box.component.html',
  styleUrls: ['./tasks-box.component.css']
})
export class TasksBoxComponent implements OnInit {
  selectedOpenTasksValues: string[];
  sampleText: string = 'conaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaatent';
  isClicked: boolean = false;
  newListName: String;
  @Input() titleColor: string;
  constructor() { }

  ngOnInit() {
  }

  switchClicked() {
    this.isClicked = !this.isClicked;
    console.log('asd');
  }


  addList(form: NgForm) {
    console.log(this.newListName);
  }
  ngOnChange() {

  }
}
