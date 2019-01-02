import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, ReactiveFormsModule, FormGroup, Validators} from "@angular/forms";
import {AddBook} from "../model/addbook.model";
import {Genre} from "../model/genre.model";
import {GenreService} from "../service/genre.service";

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private bookService: BookService, private genreService: GenreService) { }

  name=new FormControl();
  author=new FormControl();

  genres:Genre[];


  ngOnInit() {
    this.genreService.getGenres()
      .subscribe( data => {
        this.genres = data;
        console.log("response", data);
      });
  }

  onSubmit() {
    if (this.name.value != null && this.author.value != null) {
      var book = new AddBook(this.name.value, this.author.value);
      this.bookService.createBook(book)
        .subscribe(data => {
          this.router.navigate(['']);
        });
    }
    else
      window.alert("Fields can't be left open")
  }

}
