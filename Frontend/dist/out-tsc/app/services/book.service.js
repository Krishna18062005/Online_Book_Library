import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api/books';
    }
    getAllBooks() {
        return this.http.get(this.apiUrl);
    }
    getBookById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    addBook(book) {
        return this.http.post(this.apiUrl, book);
    }
    deleteBook(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
};
BookService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BookService);
export { BookService };
//# sourceMappingURL=book.service.js.map