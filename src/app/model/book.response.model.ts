import {Book} from "./book.model";

export class BookResponseModel {

  private _books: Book[];
  success: boolean;


  get books(): Book[] {
    return this._books;
  }

  set books(value: Book[]) {
    this._books = value;
  }
}
