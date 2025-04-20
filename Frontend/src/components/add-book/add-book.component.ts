import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books: any[] = [];
  newBook: any = {
    title: '',
    author: '',
    description: '',
    available: '',
  };
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
          available: '',
        };
      });
    }
  }

}
