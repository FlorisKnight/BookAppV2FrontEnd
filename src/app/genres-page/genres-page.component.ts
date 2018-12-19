import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Genre} from "../model/Genre.model";
import {GenreService} from "../service/book.service";
import {Book} from "../model/book.model";

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.css']
})
export class GenresPageComponent implements OnInit {

  private genres:Genre[];

  constructor(private router: Router, private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres()
      .subscribe( data => {
        this.genres = data;
        console.log("response", data);
      });
  }

  loadGenre(genre: Genre): void {
    localStorage.removeItem('genreId');
    localStorage.setItem('genreId', genre.id.toString());
    this.router.navigate(['genreBook']);
  }

}
