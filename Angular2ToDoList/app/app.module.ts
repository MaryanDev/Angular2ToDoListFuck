import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent }  from './toDoList.component';

@NgModule({
    imports: [BrowserModule, HttpModule,
        JsonpModule, FormsModule],
    declarations: [ToDoListComponent],
    bootstrap: [ToDoListComponent]
})
export class AppModule { }