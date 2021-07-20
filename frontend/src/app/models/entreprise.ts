import { Prestation } from "./prestation";
import { Notification } from 'src/app/models/notification';

export class Entreprise {
  _id : string;
  private _nom: String;
  private _description: String;
  private _logoUri: String;
  private _email: String;
  private _motDePasse: String;
  private _numeroTelephone: Number;
  private _adresse: String;
  private _prestations: Prestation[];
  private _notifications: Notification[];

  constructor(nom : String,
              description : String,
              logoUri : String,
              email : String,
              motDePasse : String,
              numeroTelephone : number,
              adresse : String,
              prestations: Prestation[],
              notifications: Notification[]) {
    this._nom = nom;
    this._description = description;
    this._logoUri = logoUri;
    this._email = email;
    this._motDePasse = motDePasse;
    this._numeroTelephone = numeroTelephone;
    this._adresse = adresse;
    this._prestations = prestations;
    this._notifications = notifications;
  }

  public get nom(): String {
    return this._nom;
  }

  public set nom(value: String) {
    this._nom = value;
  }

  public get adresse(): String {
    return this._adresse;
  }

  public set adresse(value: String) {
    this._adresse = value;
  }

  public get description(): String {
    return this._description;
  }

  public set description(value: String) {
    this._description = value;
  }

  public get logoUri(): String {
    return this._logoUri;
  }

  public set logoUri(value: String) {
    this._logoUri = value;
  }

  public get email(): String {
    return this._email;
  }

  public set email(value: String) {
    this._email = value;
  }

  public get motDePasse(): String {
    return this._motDePasse;
  }

  public set motDePasse(value: String) {
    this._motDePasse = value;
  }

  public get numeroTelephone(): Number {
    return this._numeroTelephone;
  }

  public set numeroTelephone(value: Number) {
    this._numeroTelephone = value;
  }

  public get prestations(): Prestation[] {
    return this._prestations;
  }

  public set prestations(value: Prestation[]) {
    this._prestations = value;
  }

  public get notifications(): Notification[] {
    return this._notifications;
  }

  public set notifications(value: Notification[]) {
    this._notifications = value;
  }
}
