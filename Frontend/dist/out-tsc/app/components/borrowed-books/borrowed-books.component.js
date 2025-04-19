import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BorrowedBooksComponent = class BorrowedBooksComponent {
    constructor(http) {
        this.http = http;
        this.borrowedBooks = [];
    }
    ngOnInit() {
        this.http.get('http://localhost:3000/api/borrowed').subscribe((data) => {
            this.borrowedBooks = data;
        }, (error) => {
            console.error('Error fetching borrowed books:', error);
        });
    }
    deleteBorrowedBook(id) {
        if (confirm('Are you sure you want to delete this borrowed book?')) {
            this.http.delete(`http://localhost:3000/api/borrowed/${id}`).subscribe(() => {
                this.borrowedBooks = this.borrowedBooks.filter((book) => book.id !== id);
            }, (error) => {
                console.error('Error deleting borrowed book:', error);
            });
        }
    }
};
BorrowedBooksComponent = __decorate([
    Component({
        selector: 'app-borrowed-books',
        templateUrl: './borrowed-books.component.html',
        styleUrls: ['./borrowed-books.component.css'],
    })
], BorrowedBooksComponent);
export { BorrowedBooksComponent };
//# sourceMappingURL=borrowed-books.component.js.map