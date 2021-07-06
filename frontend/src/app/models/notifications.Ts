export class Notifications {
  private _type : string;
  private _description : string;
  private _lu : boolean;

  constructor(type : string, description : string, lu : boolean){
    this._type = type;
    this._description = description;
    this._lu = lu;
  }
}
