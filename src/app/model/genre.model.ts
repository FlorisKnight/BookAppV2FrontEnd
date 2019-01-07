export class Genre {

   _id: number;
   _name: string;


  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }


  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }
}
