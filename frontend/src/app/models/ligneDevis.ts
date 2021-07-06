import { Prestations } from './prestations';
export class LigneDevis {
  private _prestations : Prestations;
  private _commentaires : String;
  private _nombre : Number;

  constructor(prestations : Prestations, commentaires : string, nombre : number) {
    this._prestations = prestations;
    this._commentaires = commentaires;
    this._nombre = nombre;
  }
}
