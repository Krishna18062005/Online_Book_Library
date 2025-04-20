import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BookListComponent } from "../components/book-list/book-list.component";
import { BookDetailsComponent } from "../components/book-details/book-details.component";
import { BorrowBookComponent } from "../components/borrow-book/borrow-book.component";
import { BorrowedBooksComponent } from "../components/borrowed-books/borrowed-books.component";
import { MatListModule } from "@angular/material/list";


import { AddBookComponent } from "../components/add-book/add-book.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { ManageBooksComponent } from "../components/manage-books/manage-books.component";
import { HomeComponent } from "../components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    BorrowBookComponent,
    BorrowedBooksComponent,
    AddBookComponent,
    NavBarComponent,
    ManageBooksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    // Import standalone components here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
