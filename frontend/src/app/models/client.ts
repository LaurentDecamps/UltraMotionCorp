import { Projet } from "./projets";

export class clients {
  private _id : Number;
  private _nom : String;
  private _email : String;
  private _motDePasse : String;
  private _numeroDeTelephone : Number;
  private _adresse : String;
  private _projet : Projet;


constructor (id:number, nom : string, email : string, motDePasse : string, numeroDeTelephone: number, adresse:string, projet: Projet) {
  this._id = id;
  this._nom = nom;
  this._email = email;
  this._motDePasse = motDePasse;
  this._numeroDeTelephone = numeroDeTelephone;
  this._adresse = adresse;
  this._projet = projet;
}

}
