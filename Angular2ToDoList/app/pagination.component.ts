import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from './models/pagination';

@Component({
    selector: 'pagination',
    templateUrl: '/views/templates/pagination.html'
})
export class PaginationComponent {
    @Input() pagination: Pagination;

    constructor() {
    }

    @Output() onGetNextPage = new EventEmitter<number>();
    getNextPage(page: number) {
        this.onGetNextPage.emit(page);
    }
}