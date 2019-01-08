import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBooksPageComponent } from './genre-books-page.component';
import {AppComponent} from "../app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "../service/book.service";
import {GenreService} from "../service/genre.service";

describe('GenreBooksPageComponent', () => {
  let component: GenreBooksPageComponent;
  let fixture: ComponentFixture<GenreBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ GenreBooksPageComponent ],
      providers: [BookService,GenreService,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(GenreBooksPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Genre Books');
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
