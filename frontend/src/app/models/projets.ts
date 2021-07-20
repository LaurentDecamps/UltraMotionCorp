import { Prestation } from "./prestation";

export class Projet {
  private _typeBien : string;
  private _niveauBien : string;
  private _description : string;
  private _surfacem2 : number;
  private _dateDebut : Date;
  private _prestations : Prestation[]

  _id : string;
  // typeBien : String;
  // niveauBien : String;
  // Description : String;
  // SurfaceM2 : Number;
  // DateDebut : Date;
  // prestations : Prestation[]

  constructor(typeBien : string, niveauBien : string, description : string, surfacem2 : number, dateDebut : Date, prestations : Prestation[]) {
    this._typeBien = typeBien;
    this._niveauBien = niveauBien;
    this._description = description;
    this._surfacem2 = surfacem2;
    this._dateDebut = dateDebut;
    this._prestations = prestations
  }

  public get typeBien(): string {
    return this._typeBien;
  }

  public set typeBien(value: string) {
    this._typeBien = value;
  }

  public get niveauBien(): string {
    return this._niveauBien;
  }

  public set niveauBien(value: string) {
    this._niveauBien = value;
  }

  public get description(): string {
    return this._description
  }

  public set description(value: string) {
    this._description = value;
  }

  public get surfacem2(): number {
    return this._surfacem2;
  }

  public set surfacem2(value: number) {
    this._surfacem2 = value;
  }

  public get dateDebut(): Date {
    return this._dateDebut;
  }

  public set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  public get prestations(): Prestation[] {
    return this._prestations;
  }

  public set prestations(value: Prestation[]) {
    this._prestations = value;
  }
}
