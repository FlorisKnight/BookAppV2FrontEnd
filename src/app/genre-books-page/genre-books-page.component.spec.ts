import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBooksPageComponent } from './genre-books-page.component';

describe('GenreBooksPageComponent', () => {
  let component: GenreBooksPageComponent;
  let fixture: ComponentFixture<GenreBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
