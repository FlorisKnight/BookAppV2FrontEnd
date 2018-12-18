import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BookService} from "../service/book.service";
import { Book} from "../model/book.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Books: Book[] = [];

  constructor(private router: Router, private bookService : BookService) { }

  ngOnInit() {
      this.bookService.getBooks()
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
        this.router.navigate(['edit-book']);
    }

    addBook(): void {
        this.router.navigate(['addBook']);
    }

}
