import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../model/book.model";
import {BookResponseModel} from "../model/book.response.model";
import {Observable} from "rxjs";
import {AddBook} from "../model/addbook.model";
import {EditBookModel} from "../model/editBookModel";
import {Genre} from "../model/genre.model";

@Injectable()
export class GenreService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8071/genre/';

  getGenres():Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl+"all");
  }
}
