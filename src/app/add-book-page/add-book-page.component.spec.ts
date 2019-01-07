import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormControl, ReactiveFormsModule, FormGroup, Validators} from "@angular/forms";
import { AddBookPageComponent } from './add-book-page.component';

describe('AddBookPageComponent', () => {
  let component: AddBookPageComponent;
  let fixture: ComponentFixture<AddBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
