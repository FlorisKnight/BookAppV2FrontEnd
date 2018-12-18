import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, ReactiveFormsModule, FormGroup, Validators} from "@angular/forms";
import {AddBook} from "../model/addbook.model";

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private bookService: BookService) { }

  name=new FormControl();
  author=new FormControl();


  ngOnInit() {
  }

  onSubmit() {
      var book = new AddBook(this.name.value,this.author.value);
      this.bookService.createBook(book)
          .subscribe( data => {
              this.router.navigate(['']);
          });
  }

}
