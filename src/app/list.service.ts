import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { List } from '../mock-list'
import { ListItem } from '../types'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  todoItems: ListItem[] = List
  idCounter: number = this.todoItems.length
  doneItems: ListItem[] = []

  constructor() { }

  markDone(id: number): void {
    let selectedItem: ListItem = this.todoItems.filter(item => item.id === +id)[0]
    selectedItem.isComplete = true
    this.doneItems.push(selectedItem)
    this.removeTodo(id)
  }
  markNotDone(id: number): void {
    let selectedItem: ListItem = this.doneItems.filter(item => item.id === +id)[0]
    selectedItem.isComplete = true
    this.todoItems.push(selectedItem)
    this.removeDone(id)
  }

  getTodoItems(): Observable<ListItem[]> {
    return of(this.todoItems)
  }

  pushTodo(item: ListItem) {
    this.todoItems.push(item)
  }

  removeTodo(id: number) {
    this.todoItems = this.todoItems.filter(item => item.id !== +id)
  }

  getDoneItems(): Observable<ListItem[]> {
    return of(this.doneItems)
  }

  pushDone(item: ListItem): void {
    this.doneItems.push(item)
  }

  removeDone(id: number): void {
    this.doneItems = this.doneItems.filter(item => item.id !== +id)
  }
}
