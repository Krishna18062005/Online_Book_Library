import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BorrowBookComponent } from './components/borrow-book/borrow-book.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';
import { BookReaderComponent } from './components/book-reader/book-reader.component';
import { BookReviewComponent } from './components/book-review/book-review.component';
const routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BookListComponent },
    { path: 'books/:id', component: BookDetailsComponent },
    { path: 'borrow/:id', component: BorrowBookComponent },
    { path: 'borrowed', component: BorrowedBooksComponent },
    { path: 'reader', component: BookReaderComponent },
    { path: 'reviews', component: BookReviewComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map