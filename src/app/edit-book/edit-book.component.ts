import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/Book.service';
import {Router} from "@angular/router";
import {EditBookModel} from '../model/editBookModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Book} from "../model/book.model";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  edit:EditBookModel;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private bookService: BookService) { }

  name=new FormControl();
  author=new FormControl();
  ngOnInit() {
    let bookId = localStorage.getItem('editBookId');
    if (!bookId) {
      alert('Invalid action.')
      this.router.navigate(['list-book']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      author: ['', Validators.required],

    });
    /*
    this.bookService.getBookById(+bookId)
      .subscribe( data => {
        this.edit= data;
        this.editForm.setValue(data);
      });
      */
  }

  onSubmit() {
    this.bookService.updateBook(new EditBookModel(this.edit.id,this.name.value,this.author.value))
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-book']);
        },
        error => {
          alert(error);
        });
  }

}
