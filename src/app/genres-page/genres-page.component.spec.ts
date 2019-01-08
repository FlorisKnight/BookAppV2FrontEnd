import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPageComponent } from './genres-page.component';
import {AppComponent} from "../app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "../service/book.service";
import {GenreService} from "../service/genre.service";

describe('GenresPageComponent', () => {
  let component: GenresPageComponent;
  let fixture: ComponentFixture<GenresPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ GenresPageComponent ],
      providers: [BookService,GenreService,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(GenresPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Genres');
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
