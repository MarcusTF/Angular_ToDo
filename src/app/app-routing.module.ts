import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneComponent } from './tabs/done/done.component';
import { TodoComponent } from './tabs/todo/todo.component';

const routes: Routes = [
  { path: "", redirectTo: "/todo", pathMatch: 'full'},
  {path: "todo", component: TodoComponent },
  { path: "done", component: DoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
