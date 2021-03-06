import { Component, OnInit } from '@angular/core';

import { ListItem } from '../../../types'
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  list!: ListItem[]

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getTodoList()
  }

  getTodoList() : void{
    this.listService.getTodoItems()
    .subscribe(list => this.list = list)
  }

  removeTodo(e: any) {
    e && e.target && this.listService.removeTodo(e.target.id)
    this.getTodoList()
  }
  
  markDone(e: any) {
    e && e.target && this.listService.markDone(e.target.id)
    this.getTodoList()
  }

}
