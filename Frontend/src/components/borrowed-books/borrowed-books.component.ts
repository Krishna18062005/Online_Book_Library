import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css'],
})
export class BorrowedBooksComponent implements OnInit {
  borrowedBooks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/borrowed').subscribe(
      (data) => {
        this.borrowedBooks = data;
      },
      (error) => {
        console.error('Error fetching borrowed books:', error);
      }
    );
  }

  deleteBorrowedBook(id: number): void {
    if (confirm('Are you sure you want to delete this borrowed book?')) {
      this.http.delete(`http://localhost:3000/api/borrowed/${id}`).subscribe(
        () => {
          this.borrowedBooks = this.borrowedBooks.filter(
            (book) => book.id !== id
          );
        },
        (error) => {
          console.error('Error deleting borrowed book:', error);
        }
      );
    }
  }
}
