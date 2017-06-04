import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Task } from './models/task';
import { Pagination } from './models/pagination';
import { AddTaskComponent } from './addTask.component';
import { TasksListComponent } from './taskList.component';
import { PaginationComponent } from './pagination.component';

import { TasksAjaxService } from './services/tasksAjaxService';

@Component({
    selector: 'toDoList',
    templateUrl: '/views/templates/toDo.html'
})
export class ToDoListComponent implements OnInit {
    tasks: Task[];
    importances: string[];
    pagination: Pagination;

    constructor(private http: Http, private tasksAjaxService: TasksAjaxService) {
        this.pagination = new Pagination();
        this.tasksAjaxService.getTasks(1)
            .subscribe(
                response => this.initData(response),
                error => console.log(error)
            );

        this.tasksAjaxService.getImportances()
            .subscribe(
                importances => {
                    this.importances = importances.json();
                    console.log(this.importances);
                },
                error => console.log(error)
            );
    }

    ngOnInit() {

    }

    getNextPage(page: number) {
        this.tasksAjaxService.getTasks(page)
            .subscribe(
                response => this.initData(response),
                error => console.log(error)
            );
    }

    addTask(taskToAdd: Task) {

        this.tasksAjaxService.addTask(taskToAdd).subscribe(() => {
            this.tasksAjaxService.getTasks(this.pagination.currentPage)
                .subscribe(
                    response => this.initData(response),
                    error => console.log(error)
                );
        }, error => console.log(error));
    }

    editTask(taskToEdit: Task) {
        this.tasksAjaxService.editTask(taskToEdit)
            .subscribe(
                () => console.log('successfully edited'),
                error => console.log(error)
            );
    }

    deleteTask(Id: number) {
        if (confirm("Are you sure want ot delete this task?")) {
            this.tasksAjaxService.deleteTask(Id)
                .subscribe(() => {
                    this.tasksAjaxService.getTasks(this.pagination.currentPage)
                        .subscribe(
                            response => this.initData(response),
                            error => console.log(error)
                        );
                }, error => console.log(error))
        }
    }

    private initData(response: Response) {
        let rawResponse = response.json();
        this.tasks = rawResponse.tasks;
        this.pagination.pagesArray = new Array(rawResponse.countOfPages);
        this.pagination.currentPage = rawResponse.currentPage;
    }
}