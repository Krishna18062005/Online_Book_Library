import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BookListComponent = class BookListComponent {
    constructor(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.books = [];
        this.newBook = {
            title: '',
            author: '',
            description: '',
            available: true,
        };
    }
    ngOnInit() {
        this.loadBooks();
    }
    loadBooks() {
        this.bookService.getAllBooks().subscribe((data) => {
            this.books = data;
        });
    }
    addNewBook() {
        if (this.newBook.title && this.newBook.author) {
            this.bookService.addBook(this.newBook).subscribe(() => {
                this.loadBooks();
                this.newBook = {
                    title: '',
                    author: '',
                    description: '',
                    available: true,
                };
            });
        }
    }
    deleteBook(id) {
        if (confirm('Are you sure you want to delete this book?')) {
            this.bookService.deleteBook(id).subscribe(() => {
                this.loadBooks();
            });
        }
    }
    viewDetails(id) {
        this.router.navigate(['/books', id]);
    }
};
BookListComponent = __decorate([
    Component({
        selector: 'app-book-list',
        templateUrl: './book-list.component.html',
        styleUrls: ['./book-list.component.css'],
    })
], BookListComponent);
export { BookListComponent };
//# sourceMappingURL=book-list.component.js.map