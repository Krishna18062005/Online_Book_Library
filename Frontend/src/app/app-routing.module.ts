import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { BorrowBookComponent } from "./components/borrow-book/borrow-book.component";
import { BorrowedBooksComponent } from "./components/borrowed-books/borrowed-books.component";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { ManageBooksComponent } from "./components/manage-books/manage-books.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/books", pathMatch: "full" },
  { path: "books", component: BookListComponent },
  { path: "books/:id", component: BookDetailsComponent },
  { path: "borrow/:id", component: BorrowBookComponent },
  { path: "borrowed", component: BorrowedBooksComponent },
  { path: "add-book", component: AddBookComponent },
  { path: "manage-books", component: ManageBooksComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
