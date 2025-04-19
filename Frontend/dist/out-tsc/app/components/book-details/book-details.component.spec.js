import { TestBed } from '@angular/core/testing';
import { BookDetailsComponent } from './book-details.component';
describe('BookDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BookDetailsComponent]
        });
        fixture = TestBed.createComponent(BookDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=book-details.component.spec.js.map