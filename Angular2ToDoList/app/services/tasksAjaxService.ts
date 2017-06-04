import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Task } from '../models/task';

@Injectable()
export class TasksAjaxService {

    constructor(private http: Http, private headers: Headers) {
        this.headers = new Headers();
        headers.append("Content-type", "application/json");
    }

    getTasks(pageNumber = 1): Observable<Response> {
        let params = new URLSearchParams();
        params.set('page', pageNumber.toString());

        var requestOptions = new RequestOptions({ headers: this.headers, search: params });

        return this.http.get('/api/tasks', requestOptions);
    }

    getImportances(): Observable<Response> {
        return this.http.get('/api/tasks/getImportances');
    }

    addTask(task: Task): Observable<Response> {
        return this.http.post('/api/tasks', JSON.stringify(task), { headers: this.headers });
    }

    editTask(task: Task): Observable<Response> {
        return this.http.put('/api/tasks', JSON.stringify(task), {
            headers: this.headers
        });
    }

    deleteTask(id: number): Observable<Response> {
        return this.http.delete('/api/tasks', new RequestOptions({ headers: this.headers, body: id }))
    }

}