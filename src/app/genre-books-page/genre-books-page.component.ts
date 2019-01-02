import { Component, OnInit } from '@angular/core';
import {Validators} from "@angular/forms";
import {Book} from "../model/book.model";
import {Router} from "@angular/router";
import {GenreService} from "../service/genre.service";

@Component({
  selector: 'app-genre-books-page',
  templateUrl: './genre-books-page.component.html',
  styleUrls: ['./genre-books-page.component.css']
})
export class GenreBooksPageComponent implements OnInit {
  Books: Book[] = [];

  constructor(private router: Router, private genreService : GenreService) { }

  ngOnInit() {
    let bookId = localStorage.getItem('genreId');
    this.genreService.getBooksFromGenre(bookId)
      .subscribe( data => {
        this.Books = data;
        console.log("response", data);
      });
  }

}
