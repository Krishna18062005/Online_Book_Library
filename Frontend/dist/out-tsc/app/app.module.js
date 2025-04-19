import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BorrowBookComponent } from './components/borrow-book/borrow-book.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';
// Import standalone components
import { BookReaderComponent } from './components/book-reader/book-reader.component';
import { BookReviewComponent } from './components/book-review/book-review.component';
import { NavbarComponent } from './components/navbar/navbar.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            BookListComponent,
            BookDetailsComponent,
            BorrowBookComponent,
            BorrowedBooksComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            BrowserAnimationsModule,
            MatCardModule,
            MatButtonModule,
            FormsModule,
            ReactiveFormsModule,
            // Import standalone components here
            BookReaderComponent,
            BookReviewComponent,
            NavbarComponent,
        ],
        providers: [],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map