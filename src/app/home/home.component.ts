import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Book} from "../model/book.model";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  Books: Book[] = [];
  page:number = 0;

  constructor(private router: Router, private bookService : BookService) {
  }

  ngOnInit() {
      this.bookService.getTenBooks(0)
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

  addBook(): void {
      this.router.navigate(['addBook']);
  }

  nextPage(): void{
    this.page = this.page + 10;
    this.bookService.getTenBooks(this.page)
      .subscribe( data => {
        this.Books = data;
      });
  }

  previousPage(): void{
    if (this.page > 0 ) {
      this.page = this.page - 10;;
    }
    this.bookService.getTenBooks(this.page)
      .subscribe( data => {
        this.Books = data;
        console.log("response", data);
      });
  }


}
