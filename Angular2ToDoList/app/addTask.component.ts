import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './models/task';

@Component({
    selector: 'add-task',
    templateUrl: '/views/templates/addTask.html'
})
export class AddTaskComponent {
    @Input() importances: string[];
    public taskToAdd: Task;
    constructor() {
        this.taskToAdd = new Task();
    }

    @Output() onAddTask = new EventEmitter<Task>();
    addTask() {
        this.onAddTask.emit(this.taskToAdd);
        
    }
}