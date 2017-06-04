"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
const pagination_1 = require("./models/pagination");
const tasksAjaxService_1 = require("./services/tasksAjaxService");
let ToDoListComponent = class ToDoListComponent {
    constructor(http, tasksAjaxService) {
        this.http = http;
        this.tasksAjaxService = tasksAjaxService;
        this.pagination = new pagination_1.Pagination();
        this.tasksAjaxService.getTasks(1)
            .subscribe(response => this.initData(response), error => console.log(error));
        this.tasksAjaxService.getImportances()
            .subscribe(importances => {
            this.importances = importances.json();
            console.log(this.importances);
        }, error => console.log(error));
    }
    ngOnInit() {
    }
    getNextPage(page) {
        this.tasksAjaxService.getTasks(page)
            .subscribe(response => this.initData(response), error => console.log(error));
    }
    addTask(taskToAdd) {
        this.tasksAjaxService.addTask(taskToAdd).subscribe(() => {
            this.tasksAjaxService.getTasks(this.pagination.currentPage)
                .subscribe(response => this.initData(response), error => console.log(error));
        }, error => console.log(error));
    }
    editTask(taskToEdit) {
        this.tasksAjaxService.editTask(taskToEdit).subscribe(() => console.log('successfully edited'), error => console.log(error));
    }
    deleteTask(Id) {
        if (confirm("Are you sure want ot delete this task?")) {
            this.tasksAjaxService.deleteTask(Id)
                .subscribe(() => {
                this.tasksAjaxService.getTasks(this.pagination.currentPage)
                    .subscribe(response => this.initData(response), error => console.log(error));
            }, error => console.log(error));
        }
    }
    initData(response) {
        let rawResponse = response.json();
        this.tasks = rawResponse.tasks;
        this.pagination.pagesArray = new Array(rawResponse.countOfPages);
        this.pagination.currentPage = rawResponse.currentPage;
    }
};
ToDoListComponent = __decorate([
    core_1.Component({
        selector: 'toDoList',
        templateUrl: '/views/templates/toDo.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, tasksAjaxService_1.TasksAjaxService])
], ToDoListComponent);
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=toDoList.component.js.map