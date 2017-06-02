import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TasksListComponent } from './taskList.component';
import { ToDoListComponent }  from './toDoList.component';
import { AddTaskComponent } from './addTask.component';
import { TaskDetailsComponent } from './taskDetails.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
    declarations: [ToDoListComponent, TasksListComponent, AddTaskComponent, TaskDetailsComponent],
    bootstrap: [ToDoListComponent]
})
export class AppModule { }