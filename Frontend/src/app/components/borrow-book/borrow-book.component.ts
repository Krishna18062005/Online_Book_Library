import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css'],
})
export class BorrowBookComponent implements OnInit {
  borrowForm: FormGroup;
  bookId: string | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.borrowForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    console.log(this.bookId);
  }

  onSubmit(): void {
    if (this.borrowForm.valid && this.bookId) {
      const borrowData = {
        bookId: this.bookId,
        borrower: this.borrowForm.value.name,
      };

      console.log('Sending request to borrow book:', borrowData);

      this.http
        .post(`http://localhost:3000/api/borrow/${this.bookId}`, borrowData)
        .subscribe(
          (response) => {
            console.log('Book borrowed successfully:', response);
            this.router.navigate(['/books']);
          },
          (error) => {
            console.error('Error borrowing book:', error);
            this.errorMessage = 'Failed to borrow the book. Please try again.';
          }
        );
    }
  }
}
