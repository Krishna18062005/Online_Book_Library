import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
let BookReviewComponent = class BookReviewComponent {
    constructor() {
        this.rating = 0;
    }
    rate(star) {
        this.rating = star;
    }
};
BookReviewComponent = __decorate([
    Component({
        selector: 'app-book-review',
        standalone: true,
        imports: [
            CommonModule,
            MatCardModule,
            MatButtonModule,
            MatIconModule,
            FormsModule,
            MatInputModule,
            MatFormFieldModule,
        ],
        template: `
    <div class="review-container page-transition">
      <mat-card class="review-card mat-elevation-z4">
        <mat-card-header>
          <mat-card-title>Book Review</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="review-form">
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Book Title</mat-label>
              <input matInput placeholder="Enter book title" />
            </mat-form-field>

            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Your Review</mat-label>
              <textarea
                matInput
                rows="6"
                placeholder="Write your review"
              ></textarea>
            </mat-form-field>

            <div class="rating">
              <mat-icon
                *ngFor="let star of [1, 2, 3, 4, 5]"
                (click)="rate(star)"
                [class.rated]="star <= rating"
              >
                star
              </mat-icon>
            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary">Submit Review</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
        styles: [
            `
      .review-container {
        padding: 20px;
        margin-top: 64px;
      }
      .review-card {
        max-width: 800px;
        margin: 0 auto;
      }
      .review-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .full-width {
        width: 100%;
      }
      .rating {
        display: flex;
        gap: 8px;
      }
      .rating mat-icon {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s ease;
      }
      .rating mat-icon.rated {
        color: #ffd700;
      }
    `,
        ],
    })
], BookReviewComponent);
export { BookReviewComponent };
//# sourceMappingURL=book-review.component.js.map