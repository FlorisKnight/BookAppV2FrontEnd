import { Component, OnInit } from '@angular/core';
import {EditBookModel} from "../model/editBookModel";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../service/book.service";
import {Book} from "../model/book.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {


  book:Book;
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
      genres: ['', Validators.required],

    });
    this.bookService.getBookById(+bookId)
      .subscribe( data => {
        this.book = data;
        this.editForm.setValue(data);
      });
  }

}
