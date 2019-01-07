import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";
import {EditBookModel} from '../model/editBookModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Book} from "../model/book.model";
import {Genre} from "../model/genre.model";
import {GenreService} from "../service/genre.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  edit:Book;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private bookService: BookService, private genreService: GenreService) { }

  name=new FormControl();
  author=new FormControl();
  selectedGenres= new FormControl();
  leftOverGenres= new FormControl();
  selectedGenresList:Genre[];
  leftOverGenresList:Genre[];
  savedGenres:Genre[];

  ngOnInit() {
    let bookId = localStorage.getItem('editBookId');
    if (!bookId) {
      alert('Invalid action.')
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      author: ['', Validators.required],
      genres: ['', Validators.required]
    });

    this.genreService.getGenres()
      .subscribe( data => {
        this.leftOverGenresList = data;
        console.log("response", data);
      });

    this.bookService.getBookById(+bookId)
      .subscribe( data => {
        this.selectedGenresList = [];
        for (let genre of data.genres){
          console.log("Genres added")
          this.selectedGenresList.push(new Genre(genre._id, genre._name))
        }

        for (let genre of this.selectedGenresList){
          console.log(genre._id)
          const toBeRemoved = this.leftOverGenresList.find(g => g._id == genre._id)
          this.leftOverGenresList.splice(this.leftOverGenresList.indexOf(toBeRemoved),1)
        }

        this.edit= data;
        console.log(data);
        this.editForm.setValue(data);

      });



  }

  onSubmit() {
    this.savedGenres = [];
    if (this.selectedGenres.value != null) {
      for (let genre of this.selectedGenres.value) {
        const toBeRemoved = this.selectedGenresList.find(g => g._id == genre._id)
        this.selectedGenresList.splice(this.selectedGenresList.indexOf(toBeRemoved), 1)
      }
    }
    if (this.selectedGenresList != null && this.selectedGenresList.length != 0) {
      for (let g of this.selectedGenresList) {
        this.savedGenres.push(g);
      }
    }
    if (this.leftOverGenres.value != null) {
      for (let genre of this.leftOverGenres.value) {
        this.savedGenres.push(genre);
      }
    }

    if (this.name.value != null && this.author.value != null && this.savedGenres.length != 0) {
      this.bookService.updateBook(new EditBookModel(this.edit.id, this.name.value, this.author.value, this.savedGenres))
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['']);
          },
          error => {
            alert(error);
          });
    }
    else
      window.alert("Fields can't be left open")
  }

}
