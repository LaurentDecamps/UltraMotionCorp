import { Prestation } from "./prestation";
import { Notification } from 'src/app/models/notification';

export class Entreprise {
  _id : string;
  private _nom: string;
  private _description: string;
  private _logoUri: string;
  private _email: string;
  private _motDePasse: string;
  private _numeroTelephone: number;
  private _adresse: string;
  private _prestations: Prestation[];
  private _notifications: Notification[];

  constructor(nom : string,
              description : string,
              logoUri : string,
              email : string,
              motDePasse : string,
              numeroTelephone : number,
              adresse : string,
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

  public get nom(): string {
    return this._nom;
  }

  public set nom(value: string) {
    this._nom = value;
  }

  public get adresse(): string {
    return this._adresse;
  }

  public set adresse(value: string) {
    this._adresse = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get logoUri(): string {
    return this._logoUri;
  }

  public set logoUri(value: string) {
    this._logoUri = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get motDePasse(): string {
    return this._motDePasse;
  }

  public set motDePasse(value: string) {
    this._motDePasse = value;
  }

  public get numeroTelephone(): number {
    return this._numeroTelephone;
  }

  public set numeroTelephone(value: number) {
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
