import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ListItem } from '../../types'
import { ListService } from '../list.service'

@Component({
  selector: 'app-text-bar',
  templateUrl: './text-bar.component.html',
  styleUrls: ['./text-bar.component.scss']
})
export class TextBarComponent implements OnInit {

  inputText: string = ""

  constructor(private listService: ListService) { }

  ngOnInit(): void {

  }

  commit(): void {
    this.listService.pushTodo({
      id: (this.listService.idCounter + 1),
      text: this.inputText,
      isComplete: false
    })
    this.listService.idCounter = this.listService.idCounter + 1
    this.inputText = ""
  }

}
