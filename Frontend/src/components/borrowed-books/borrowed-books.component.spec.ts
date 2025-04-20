import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BorrowedBooksComponent } from './borrowed-books.component';

describe('BorrowedBooksComponent', () => {
  let component: BorrowedBooksComponent;
  let fixture: ComponentFixture<BorrowedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrowedBooksComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load borrowed books', () => {
    expect(component.borrowedBooks).toEqual([]);
  });
});
