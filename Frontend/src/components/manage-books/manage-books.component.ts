import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css'],
})
export class ManageBooksComponent implements OnInit {
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

  deleteBook(id: string) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.loadBooks();
      });
    }
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
