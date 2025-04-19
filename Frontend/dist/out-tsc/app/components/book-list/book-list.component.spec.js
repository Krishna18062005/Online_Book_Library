import { TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
describe('BookListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BookListComponent]
        });
        fixture = TestBed.createComponent(BookListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=book-list.component.spec.js.map