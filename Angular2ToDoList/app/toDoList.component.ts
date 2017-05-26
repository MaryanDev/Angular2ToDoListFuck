import { Component, OnInit } from '@angular/core';
import { Injectable }              from '@angular/core';
import { Http, Response, Headers }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Task } from './models/task';

@Component({
    selector: 'toDoList',
    templateUrl: '/views/templates/toDo.html'
})
export class ToDoListComponent implements OnInit {
    taskToAdd: Task;
    tasks: Task[];

    

    constructor(private http: Http) {
        this.taskToAdd = new Task();
        
    }

    ngOnInit() {
        this.http.get('/api/tasks')
            .subscribe(
            tasks => this.tasks = tasks.json(),
            error => console.log(error)
            );
    }

    addTask() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        this.http.post('/api/tasks', JSON.stringify(this.taskToAdd), { headers: headers }).subscribe(() => {
            this.http.get('/api/tasks')
                .subscribe(
                tasks => this.tasks = tasks.json(),
                error => console.log(error)
                );
        }, error => console.log(error));
    }

    editTask(taskToEdit: Task) {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        this.http.put('/api/tasks', JSON.stringify(taskToEdit), {
            headers: headers
        }).subscribe(() => console.log('successfully edited'), error => console.log(error));

        this.tasks[this.tasks.indexOf(taskToEdit)].IsEditable = false;
    }

    enableEditing(index: number) {
        this.tasks[index].IsEditable = !this.tasks[index].IsEditable;
    }
}