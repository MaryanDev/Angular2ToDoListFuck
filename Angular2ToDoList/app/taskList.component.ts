import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskDetailsComponent } from './taskDetails.component';
import { Task } from './models/task';

declare var $: any;

@Component({
    selector: 'tasks-list',
    templateUrl: '/views/templates/tasksList.html'
})
export class TasksListComponent {
    @Input() tasks: Task[];
    taskToDisplay: Task;

    isDeleteSignVisible: boolean;

    constructor() {
        this.taskToDisplay = new Task();
    }

    @Output() onDeleteTask = new EventEmitter<number>();
    deleteTask(Id: number) {
        this.onDeleteTask.emit(Id);
    }

    openModal(task: Task) {
        this.taskToDisplay = task;
    }

    showDeleteSign(index:number, condition: boolean) {
        this.tasks[index].isDeleteSignVisible = condition;
    }
}