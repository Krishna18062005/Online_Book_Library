import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
describe('BookService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BookService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=book.service.spec.js.map