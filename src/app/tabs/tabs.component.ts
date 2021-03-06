import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  isTodo: boolean = true
  isDone: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

  selectTodo() {
    this.isTodo = true
    this.isDone = false
  }

  selectDone() {
    this.isTodo = false
    this.isDone = true
  }

}
