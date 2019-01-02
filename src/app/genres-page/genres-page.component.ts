import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Genre} from "../model/genre.model";
import {GenreService} from "../service/genre.service";

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.css']
})
export class GenresPageComponent implements OnInit {

  genres:Genre[] = [];

  constructor(private router: Router, private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres()
      .subscribe( data => {
        this.genres = data;
        console.log("response", data);
      });
  }

  loadGenre(id: number): void {
    console.log(id);
    localStorage.removeItem('genreId');
    localStorage.setItem('genreId', id.toString());
    this.router.navigate(['genreBook']);
  }

}
