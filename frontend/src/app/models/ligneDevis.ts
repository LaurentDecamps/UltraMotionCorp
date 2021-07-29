import { Prestation } from './prestation';
export class LigneDevis {
  private _prestations : Prestation;
  private _commentaires : String;
  private _nombre : Number;

  constructor(prestations : Prestation, commentaires : string, nombre : number) {
    this._prestations = prestations;
    this._commentaires = commentaires;
    this._nombre = nombre;
  }
}
