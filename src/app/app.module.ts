import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBarComponent } from './text-bar/text-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './tabs/todo/todo.component';
import { DoneComponent } from './tabs/done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBarComponent,
    TabsComponent,
    ListItemComponent,
    TodoComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
