import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
let BookReaderComponent = class BookReaderComponent {
    constructor() {
        this.samplePdf = 'assets/sample.pdf';
        this.rating = 0;
        this.reviewText = '';
        this.reviews = [];
    }
    rate(star) {
        this.rating = star;
    }
    submitReview() {
        if (this.reviewText && this.rating > 0) {
            this.reviews.unshift({
                text: this.reviewText,
                rating: this.rating,
                date: new Date(),
            });
            this.reviewText = '';
            this.rating = 0;
        }
    }
};
BookReaderComponent = __decorate([
    Component({
        selector: 'app-book-reader',
        standalone: true,
        imports: [
            CommonModule,
            MatCardModule,
            MatButtonModule,
            MatIconModule,
            PdfViewerModule,
            FormsModule,
            MatInputModule,
            MatFormFieldModule,
        ],
        template: `
    <div class="reader-container page-transition">
      <mat-card class="mat-elevation-z4">
        <mat-card-header>
          <mat-card-title>PDF Reader</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="pdf-wrapper animated">
            <pdf-viewer
              [src]="samplePdf"
              [render-text]="true"
              [original-size]="false"
              [show-all]="true"
              [autoresize]="true"
              style="display: block; height: 80vh;"
            ></pdf-viewer>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="review-section mat-elevation-z4">
        <mat-card-header>
          <mat-card-title>Add Your Review</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="review-form">
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Your Review</mat-label>
              <textarea
                matInput
                rows="4"
                [(ngModel)]="reviewText"
                placeholder="Share your thoughts about this book..."
              ></textarea>
            </mat-form-field>

            <div class="rating">
              <span class="rating-label">Rating:</span>
              <mat-icon
                *ngFor="let star of [1, 2, 3, 4, 5]"
                (click)="rate(star)"
                [class.rated]="star <= rating"
                class="star-icon"
              >
                star
              </mat-icon>
            </div>
          </div>

          <div class="reviews-list" *ngIf="reviews.length > 0">
            <h3>Previous Reviews</h3>
            <div class="review-item" *ngFor="let review of reviews">
              <div class="review-header">
                <div class="rating-display">
                  <mat-icon
                    *ngFor="let star of [1, 2, 3, 4, 5]"
                    [class.rated]="star <= review.rating"
                  >
                    star
                  </mat-icon>
                </div>
                <span class="review-date">{{ review.date | date }}</span>
              </div>
              <p class="review-text">{{ review.text }}</p>
            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-raised-button
            color="primary"
            (click)="submitReview()"
            [disabled]="!reviewText"
          >
            Submit Review
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
        styles: [
            `
      .reader-container {
        padding: 20px;
        margin-top: 64px;
      }
      mat-card {
        max-width: 1200px;
        margin: 0 auto 20px auto;
      }
      .review-section {
        margin-top: 20px;
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
        align-items: center;
        gap: 8px;
      }
      .rating-label {
        color: rgba(0, 0, 0, 0.6);
        margin-right: 8px;
      }
      .star-icon {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s ease;
      }
      .star-icon.rated {
        color: #ffd700;
      }
      .reviews-list {
        margin-top: 30px;
        border-top: 1px solid #eee;
        padding-top: 20px;
      }
      .review-item {
        padding: 15px;
        border-bottom: 1px solid #eee;
        animation: fadeIn 0.5s ease-in;
      }
      .review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .rating-display {
        display: flex;
        gap: 4px;
      }
      .rating-display mat-icon {
        font-size: 18px;
        width: 18px;
        height: 18px;
        color: #ccc;
      }
      .rating-display mat-icon.rated {
        color: #ffd700;
      }
      .review-date {
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.9em;
      }
      .review-text {
        color: rgba(0, 0, 0, 0.87);
        line-height: 1.5;
      }
      .animated {
        animation: fadeIn 1s ease-out;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
        ],
    })
], BookReaderComponent);
export { BookReaderComponent };
//# sourceMappingURL=book-reader.component.js.map