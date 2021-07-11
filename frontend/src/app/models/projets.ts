import { Prestations } from "./prestations";

export class Projet {
  private _typeBien : String;
  private _niveauBien : String;
  private _description : String;
  private _surfacem2 : Number;
  private _dateDebut : Date;
  private _prestations : Prestations

  typeBien : String;
  niveauBien : String;
  Description : String;
  surfacem2 : Number;
  dateDebut : Date;
  prestations : Prestations[]

  constructor(typeBien : string, niveauBien : string, description : string, surfacem2 : number, dateDebut : Date, prestations : Prestations) {
    this._typeBien = typeBien;
    this._niveauBien = niveauBien;
    this._description = description;
    this._surfacem2 = surfacem2;
    this._dateDebut = dateDebut;
    this._prestations = prestations
  }
}
