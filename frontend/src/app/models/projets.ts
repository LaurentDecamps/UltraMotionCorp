import { Prestation } from "./prestation";

export class Projet {
  private _typeBien : String;
  private _niveauBien : String;
  private _description : String;
  private _surfacem2 : Number;
  private _dateDebut : Date;
  private _prestations : Prestation

  _id : string;
  typeBien : String;
  niveauBien : String;
  Description : String;
  SurfaceM2 : Number;
  DateDebut : Date;
  prestations : Prestation[]

  constructor(typeBien : string, niveauBien : string, description : string, surfacem2 : number, dateDebut : Date, prestations : Prestation) {
    this._typeBien = typeBien;
    this._niveauBien = niveauBien;
    this._description = description;
    this._surfacem2 = surfacem2;
    this._dateDebut = dateDebut;
    this._prestations = prestations
  }
}
