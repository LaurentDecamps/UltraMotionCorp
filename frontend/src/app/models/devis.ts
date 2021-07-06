import { LigneDevis } from "./ligneDevis";

export class Devis {
  private _titre : String;
  private _etat : String;
  private _ligne : LigneDevis;

  constructor(titre : string, etat: string, ligne: LigneDevis) {
    this._titre = titre;
    this._etat = etat;
    this._ligne = ligne;

  }
}
