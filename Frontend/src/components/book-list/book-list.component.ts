import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  newBook: any = {
    title: '',
    author: '',
    description: '',
    available: true,
  };
  editingBook: any = null;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
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

  deleteBook(id: string) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.loadBooks();
      });
    }
  }

  viewDetails(id: string) {
    this.router.navigate(['/books', id]);
  }

  startEditing(book: any) {
    // Create a copy to prevent immediate update of the list item
    this.editingBook = { ...book };
  }

  cancelEditing() {
    this.editingBook = null;
  }

  updateBook(book: any) {
    this.bookService.updateBook(book).subscribe(() => {
      this.loadBooks();
      this.editingBook = null;
    });
  }
}
