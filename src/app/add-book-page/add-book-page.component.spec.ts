import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormControl, ReactiveFormsModule, FormGroup, Validators, FormsModule} from "@angular/forms";
import { AddBookPageComponent } from './add-book-page.component';
import {AppComponent} from "../app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "../service/book.service";
import {GenreService} from "../service/genre.service";
import {MatSelectModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AddBookPageComponent', () => {
  let component: AddBookPageComponent;
  let fixture: ComponentFixture<AddBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule,MatSelectModule,FormsModule, BrowserAnimationsModule],
      declarations: [ AddBookPageComponent ],
      providers: [BookService,GenreService,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AddBookPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Add Book');
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
