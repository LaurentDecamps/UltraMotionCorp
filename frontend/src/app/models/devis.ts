import { Entreprise } from "./entreprise";
import { Prestation } from "./prestation";
// import { LigneDevis } from "./ligneDevis";
import { Projet } from "./projets";

export class Devis {
  private _titre: String;
  private _etat: String;
  // // private _ligne : LigneDevis;
  private _tempsPrestationJours: Number;
  private _prixMateriel: Number;
  private _projet: Projet;
  private _prestation: Prestation;
  private _entreprise: string;//Entreprise;

  _id: string;
  // titre: string;
  // etat: string;
  // tempsPrestationJours: number;
  // prixMateriel: number;
  // projet: Projet;
  prestation: Prestation;
  // entreprise: string;

  constructor(titre: string,
    etat: string,
    // ligne: LigneDevis
    tempsPrestationJours: Number,
    prixMateriel: Number,
    projet: Projet,
    prestation: Prestation,
    entreprise: string
  ) {
    this._titre = titre;
    this._etat = etat;
    this._tempsPrestationJours = tempsPrestationJours;
    this._prixMateriel = prixMateriel;
    this._projet = projet;
    this._prestation = prestation;
    this._entreprise = entreprise;
    // this._ligne = ligne;
  }

  public get entreprise(): string {
    return this._entreprise;
  }

  public set entreprise(value: string) {
    this._entreprise = value;
  }

  public get titre(): String {
    return this._titre;
  }

  public set titre(value: String) {
    this._titre = value;
  }

  public get etat(): String {
    return this._etat;
  }

  public set etat(value: String) {
    this._etat = value;
  }

  public get tempsPrestationJours(): Number {
    return this._tempsPrestationJours;
  }

  public set tempsPrestationJours(value: Number) {
    this._tempsPrestationJours = value;
  }

  public get prixMateriel(): Number {
    return this._prixMateriel;
  }

  public set prixMateriel(value: Number) {
    this._prixMateriel = value;
  }

  public get projet(): Projet {
    return this._projet;
  }

  public set projet(value: Projet) {
    this._projet = value;
  }
}
