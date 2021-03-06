import { Component, OnInit } from '@angular/core';

import { ListItem } from '../../../types'
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  list!: ListItem[]

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getDoneList()
  }

  getDoneList() : void{
    this.listService.getDoneItems()
    .subscribe(list => this.list = list)
  }

  removeDone(e: any) {
    e && e.target && this.listService.removeDone(e.target.id)
    this.getDoneList()
  }

  markNotDone(e: any) {
    e && e.target && this.listService.markNotDone(e.target.id)
    this.getDoneList()
  }
}
