import { Component, Input } from '@angular/core';
import { Task } from './models/task';

@Component({
    selector: 'task-details',
    templateUrl: '/views/templates/taskDetails.html'
})
export class TaskDetailsComponent {
    @Input() taskToDisplay: Task;
}