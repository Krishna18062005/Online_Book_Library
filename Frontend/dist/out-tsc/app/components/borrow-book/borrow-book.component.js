import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let BorrowBookComponent = class BorrowBookComponent {
    constructor(route, router, fb, http) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.bookId = null;
        this.errorMessage = '';
        this.borrowForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
        });
    }
    ngOnInit() {
        this.bookId = this.route.snapshot.paramMap.get('id');
    }
    onSubmit() {
        if (this.borrowForm.valid && this.bookId) {
            const borrowData = {
                bookId: this.bookId,
                borrower: this.borrowForm.value.name,
            };
            console.log('Sending request to borrow book:', borrowData); // 添加调试信息
            this.http
                .post(`http://localhost:3000/api/borrow/${this.bookId}`, borrowData)
                .subscribe((response) => {
                console.log('Book borrowed successfully:', response); // 添加调试信息
                this.router.navigate(['/books']);
            }, (error) => {
                console.error('Error borrowing book:', error); // 添加调试信息
                this.errorMessage = 'Failed to borrow the book. Please try again.';
            });
        }
    }
};
BorrowBookComponent = __decorate([
    Component({
        selector: 'app-borrow-book',
        templateUrl: './borrow-book.component.html',
        styleUrls: ['./borrow-book.component.css'],
    })
], BorrowBookComponent);
export { BorrowBookComponent };
//# sourceMappingURL=borrow-book.component.js.map