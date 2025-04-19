import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BorrowBookComponent } from './borrow-book.component';
describe('BorrowBookComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BorrowBookComponent],
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: {
                                get: (param) => '1',
                            },
                        },
                    },
                },
            ],
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(BorrowBookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have form invalid when empty', () => {
        expect(component.borrowForm.valid).toBeFalsy();
    });
    it('should have form valid when filled', () => {
        component.borrowForm.controls['name'].setValue('John Doe');
        expect(component.borrowForm.valid).toBeTruthy();
    });
});
//# sourceMappingURL=borrow-book.component.spec.js.map