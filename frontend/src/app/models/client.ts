import { Projet } from "./projets";

export class Client {
  private _id: String;
  private _nom: String;
  private _prenom: String;
  private _email: String;
  private _motDePasse: String;
  private _numeroDeTelephone: String;
  private _adresse: String;
  private _projets: Projet[];
  private _notifications: Notification[]

  constructor(id: String,
              nom: String,
              prenom: String,
              email: String,
              motDePasse: String,
              numeroDeTelephone: String,
              adresse: String,
              projets: Projet[],
              notifications: Notification[]) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
    this._email = email;
    this._motDePasse = motDePasse;
    this._numeroDeTelephone = numeroDeTelephone;
    this._adresse = adresse;
    this._projets = projets;
    this._notifications = notifications;
  }

  public get id(): String {
    return this._id;
  }

  public get nom(): String {
    return this._nom;
  }

  public get prenom(): String {
    return this._prenom;
  }
  public set prenom(value: String) {
    this._prenom = value;
  }

  public get email(): String {
    return this._email;
  }

  public get motDePasse(): String {
    return this._motDePasse;
  }

  public get numeroDeTelephone(): String {
    return this._numeroDeTelephone;
  }

  public get adresse(): String {
    return this._adresse;
  }

  public get projets(): Projet[] {
    return this._projets;
  }

  public get notifications(): Notification[] {
    return this._notifications;
  }
}
