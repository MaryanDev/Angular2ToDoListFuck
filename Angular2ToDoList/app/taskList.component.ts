import { Component, Input } from '@angular/core';
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
    constructor() {
        this.taskToDisplay = new Task();
    }

    openModal(task: Task) {
        this.taskToDisplay = task;
    }
}