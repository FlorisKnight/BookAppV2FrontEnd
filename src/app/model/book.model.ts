export class Book {

  private _id: number;
  private _name: string;
  private _author: string;
  private _list: string[];


  constructor(id: number, name: string, author: string, list: string[]) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._list = list;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get author(): string {
    return this._author;
  }

  get list(): string[] {
    return this._list;
  }
}
