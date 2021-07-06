export class Entreprises {
  private _nom : String;
  private _description : String;
  private _logoUri : String;
  private _email : String;
  private _motDePasse : String;
  private _numeroTelephone : Number;
  private _adresse : String;

  constructor(nom : string, description : string, logoUri : string, email : string, motDePasse : string, numeroTelephone : number, adresse : string) {
    this._nom = nom;
    this._description = description;
    this._logoUri = logoUri;
    this._email = email;
    this._motDePasse = motDePasse;
    this._numeroTelephone = numeroTelephone;
    this._adresse = adresse;
  }
}
