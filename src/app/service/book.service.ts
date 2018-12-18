import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../model/book.model";
import {BookResponseModel} from "../model/book.response.model";
import {Observable} from "rxjs";
import {AddBook} from "../model/addbook.model";
import {EditBookModel} from "../model/editBookModel";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8071/book/';

  getBooks():Observable<Book[]> {
    /* let fakeBooks = [{id: 1, bookTitle: 'test',  authorsName: 'Test'},
     {id: 2, bookTitle: 'test2',  authorsName: 'Test2'},
     {id: 3, bookTitle: 'test3',  authorsName: 'Test3'},
     {id: 4, bookTitle: 'test4',  authorsName: 'Test4'},
   ];
   return Observable.of(fakeBooks).delay(5000);*/
    console.log("book");
    return this.http.get<Book[]>(this.baseUrl+"all");
  }

  getBookById(id: number) {
    return this.http.get<EditBookModel>(this.baseUrl + '/' + id);
  }

  createBook(book:AddBook) {
    return this.http.post(this.baseUrl+"save", book);
  }

  updateBook(book: EditBookModel) {
    return this.http.post(this.baseUrl + "save", book);
  }

  deleteBook(book:Book) {

    return this.http.get(this.baseUrl + "delete/"+ book.id);
  }
}
