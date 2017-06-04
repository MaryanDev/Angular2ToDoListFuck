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
let ToDoListComponent = class ToDoListComponent {
    constructor(http) {
        this.http = http;
        this.http.get('/api/tasks')
            .subscribe(tasks => this.tasks = tasks.json(), error => console.log(error));
        this.http.get('/api/tasks/getImportances')
            .subscribe(importances => { this.importances = importances.json(); console.log(this.importances); }, error => console.log(error));
    }
    ngOnInit() {
    }
    addTask(taskToAdd) {
        let headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        this.http.post('/api/tasks', JSON.stringify(taskToAdd), { headers: headers }).subscribe(() => {
            this.http.get('/api/tasks')
                .subscribe(tasks => this.tasks = tasks.json(), error => console.log(error));
        }, error => console.log(error));
    }
    editTask(taskToEdit) {
        let headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        this.http.put('/api/tasks', JSON.stringify(taskToEdit), {
            headers: headers
        }).subscribe(() => console.log('successfully edited'), error => console.log(error));
        //this.tasks[this.tasks.indexOf(taskToEdit)].IsEditable = false;
    }
    deleteTask(Id) {
        if (confirm("Are you sure want ot delete this task?")) {
            let headers = new http_1.Headers();
            headers.append("Content-type", "application/json");
            this.http.delete('/api/tasks', new http_1.RequestOptions({ headers: headers, body: Id }))
                .subscribe(() => {
                this.http.get('/api/tasks')
                    .subscribe(tasks => this.tasks = tasks.json(), error => console.log(error));
            }, error => console.log(error));
        }
    }
};
ToDoListComponent = __decorate([
    core_1.Component({
        selector: 'toDoList',
        templateUrl: '/views/templates/toDo.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ToDoListComponent);
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=toDoList.component.js.map