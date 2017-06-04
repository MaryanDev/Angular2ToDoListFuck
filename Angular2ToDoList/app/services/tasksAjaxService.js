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
let TasksAjaxService = class TasksAjaxService {
    constructor(http) {
        this.http = http;
    }
    getTasks(pageNumber = 1) {
        let headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        let params = new http_1.URLSearchParams();
        params.set('page', pageNumber.toString());
        var requestOptions = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get('/api/tasks', requestOptions);
    }
    getImportances() {
        return this.http.get('/api/tasks/getImportances');
    }
    addTask(task) {
        let headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        return this.http.post('/api/tasks', JSON.stringify(task), { headers: headers });
    }
    editTask(task) {
        let headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        return this.http.put('/api/tasks', JSON.stringify(task), {
            headers: headers
        });
    }
    deleteTask(id) {
        let headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        return this.http.delete('/api/tasks', new http_1.RequestOptions({ headers: headers, body: id }));
    }
};
TasksAjaxService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TasksAjaxService);
exports.TasksAjaxService = TasksAjaxService;
//# sourceMappingURL=tasksAjaxService.js.map