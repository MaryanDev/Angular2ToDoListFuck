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
const task_1 = require("./models/task");
let TasksListComponent = class TasksListComponent {
    constructor() {
        this.onDeleteTask = new core_1.EventEmitter();
        this.taskToDisplay = new task_1.Task();
    }
    deleteTask(Id) {
        this.onDeleteTask.emit(Id);
    }
    openModal(task) {
        this.taskToDisplay = task;
    }
    showDeleteSign(index, condition) {
        this.tasks[index].isDeleteSignVisible = condition;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TasksListComponent.prototype, "tasks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TasksListComponent.prototype, "onDeleteTask", void 0);
TasksListComponent = __decorate([
    core_1.Component({
        selector: 'tasks-list',
        templateUrl: '/views/templates/tasksList.html'
    }),
    __metadata("design:paramtypes", [])
], TasksListComponent);
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=taskList.component.js.map