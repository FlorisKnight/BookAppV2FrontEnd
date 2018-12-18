import {Genre} from "./genre.model";

export class EditBookModel {

  private _id: number;
  private _name: string;
  private _author: string;
  private _genres: Genre[];


  constructor(id:number, name: string, author: string) {
    this._id = id;
    this._name = name;
    this._author = author;
  }
  /*
    constructor(name: string, author: string, genres: string[]) {
      this.name = name;
      this.author = author;
      this.genres = genres;
    }
  */
  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get author(): string {
    return this._author;
  }

  get genres(): Genre[] {
    return this._genres;
  }


  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set author(value: string) {
    this._author = value;
  }

  set genres(value: Genre[]) {
    this._genres = value;
  }
}
