import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Genre} from "../model/genre.model";
import {Book} from "../model/book.model";

@Injectable()
export class GenreService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8071/genre/';

  getGenres():Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl+"all");
  }

  getBooksFromGenre(id: string):Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl+'books/' + id);
  }
}
