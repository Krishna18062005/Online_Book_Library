import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BookDetailsComponent = class BookDetailsComponent {
    constructor(route, bookService) {
        this.route = route;
        this.bookService = bookService;
    }
    ngOnInit() {
        const bookId = this.route.snapshot.paramMap.get('id');
        if (bookId) {
            this.bookService.getBookById(bookId).subscribe((data) => {
                this.book = data;
            });
        }
    }
};
BookDetailsComponent = __decorate([
    Component({
        selector: 'app-book-details',
        templateUrl: './book-details.component.html',
        styleUrls: ['./book-details.component.css'],
    })
], BookDetailsComponent);
export { BookDetailsComponent };
//# sourceMappingURL=book-details.component.js.map