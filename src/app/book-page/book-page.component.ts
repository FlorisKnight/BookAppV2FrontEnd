import { Component, OnInit } from '@angular/core';
import {EditBookModel} from "../model/editBookModel";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../service/book.service";
import {Book} from "../model/book.model";
import {Genre} from "../model/genre.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {


  book:Book;
  constructor(private formBuilder: FormBuilder,private router: Router, private bookService: BookService) { }

  name:string;
  author:string;
  genres:Genre[];

  ngOnInit() {
    let bookId = localStorage.getItem('viewBookId');
    if (!bookId) {
      alert('Invalid action.')
      this.router.navigate(['']);
      return;
    }

    this.bookService.getBookById(+bookId)
      .subscribe( data => {
        this.book = data;
        this.name = data.name;
        this.author = data.author;
        this.genres = []
        for (let genre of data.genres){
          this.genres.push(new Genre(genre._id, genre._name))
        }

      });
  }

}
