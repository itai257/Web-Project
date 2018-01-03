import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {
  selectedOpenTasksValues: string[];
  sampleText: string = 'conaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaatent';
  isClicked: boolean = false;
  newListName: String;
  constructor() { }

  ngOnInit() {

  }

  selectedTasksEvent(s,v,e) {
    console.log(s);
    console.log(v);
    console.log(e);

  }
  switchClicked(){
    this.isClicked = !this.isClicked;
    console.log('asd');
  }


  addList(form: NgForm){
    console.log(this.newListName);
  }
}
