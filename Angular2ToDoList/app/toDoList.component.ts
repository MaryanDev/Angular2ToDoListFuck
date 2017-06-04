import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Task } from './models/task';
import { AddTaskComponent } from './addTask.component';
import { TasksListComponent } from './taskList.component';

@Component({
    selector: 'toDoList',
    templateUrl: '/views/templates/toDo.html'
})
export class ToDoListComponent implements OnInit {
    tasks: Task[];
    importances: string[];

    constructor(private http: Http) {
        this.http.get('/api/tasks')
            .subscribe(
            tasks => this.tasks = tasks.json(),
            error => console.log(error)
            );

        this.http.get('/api/tasks/getImportances')
            .subscribe(
            importances => { this.importances = importances.json(); console.log(this.importances); },
            error => console.log(error)
            );
    }

    ngOnInit() {

    }

    addTask(taskToAdd: Task) {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        this.http.post('/api/tasks', JSON.stringify(taskToAdd), { headers: headers }).subscribe(() => {
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

        //this.tasks[this.tasks.indexOf(taskToEdit)].IsEditable = false;
    }

    deleteTask(Id: number) {
        if (confirm("Are you sure want ot delete this task?")) {
            let headers = new Headers();
            headers.append("Content-type", "application/json");

            this.http.delete('/api/tasks', new RequestOptions({ headers: headers, body: Id }))
                .subscribe(() => {
                    this.http.get('/api/tasks')
                        .subscribe(
                        tasks => this.tasks = tasks.json(),
                        error => console.log(error)
                        );
                }, error => console.log(error))
        }
    }
}