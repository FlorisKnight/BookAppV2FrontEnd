import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../model/book.model";
import {Observable} from "rxjs";
import {AddBook} from "../model/addbook.model";
import {EditBookModel} from "../model/editBookModel";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8071/book/';

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl+"all");
  }

  getBookById(id: number) {
    return this.http.get<Book>(this.baseUrl + '/' + id);
  }

  getTenBooks(index: number){
    return this.http.get<Book[]>(this.baseUrl + '/amount/' + index);
  }

  getBookByGenre(id: string) {
    return this.http.get<Book[]>(this.baseUrl + '/genre/' + id);
  }

  createBook(book:AddBook) {
    return this.http.post(this.baseUrl+"save", book);
  }

  updateBook(book: EditBookModel) {
    return this.http.post(this.baseUrl + "update", book);
  }

  deleteBook(book:Book) {
    return this.http.get(this.baseUrl + "delete/"+ book.id);
  }
}
