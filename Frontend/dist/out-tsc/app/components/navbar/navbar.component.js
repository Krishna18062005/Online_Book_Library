import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.navItems = [
            { label: 'Books', route: '/books', icon: 'library_books' },
            { label: 'Book Details', route: '/books/1', icon: 'info' },
            { label: 'Borrow Book', route: '/borrow/1', icon: 'shopping_cart' },
            { label: 'Borrowed Books', route: '/borrowed', icon: 'book' },
            { label: 'Reader', route: '/reader', icon: 'menu_book' },
            { label: 'Reviews', route: '/reviews', icon: 'rate_review' },
        ];
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        standalone: true,
        imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, CommonModule],
        template: `
    <mat-toolbar color="primary" class="navbar">
      <span>BookReader</span>
      <span class="spacer"></span>
      <ng-container *ngFor="let navItem of navItems">
        <button mat-button [routerLink]="navItem.route">
          <mat-icon>{{ navItem.icon }}</mat-icon>
          {{ navItem.label }}
        </button>
      </ng-container>
    </mat-toolbar>
  `,
        styles: [
            `
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }
      .spacer {
        flex: 1 1 auto;
      }
    `,
        ],
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map