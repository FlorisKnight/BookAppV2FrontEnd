import { Component, OnInit } from '@angular/core';
import {Validators} from "@angular/forms";
import {Book} from "../model/book.model";
import {Router} from "@angular/router";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-genre-books-page',
  templateUrl: './genre-books-page.component.html',
  styleUrls: ['./genre-books-page.component.css']
})
export class GenreBooksPageComponent implements OnInit {
  Books: Book[] = [];

  constructor(private router: Router, private bookService : BookService) { }

  ngOnInit() {
    let bookId = localStorage.getItem('genreId');
    this.bookService.getBookByGenre(bookId)
      .subscribe( data => {
        this.Books = data;
        console.log("response", data);
      });
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book)
      .subscribe( data => {
        this.Books = this.Books.filter(u => u !== book);
      });
  }

  editBook(book: Book): void {
    localStorage.removeItem('editBookId');
    localStorage.setItem('editBookId', book.id.toString());
    this.router.navigate(['editBook']);
  }

  viewBook(book: Book): void {
    localStorage.removeItem('viewBookId');
    localStorage.setItem('viewBookId', book.id.toString());
    this.router.navigate(['book']);
  }

}
