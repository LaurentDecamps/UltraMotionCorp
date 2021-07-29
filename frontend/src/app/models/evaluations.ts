import { Client } from "./client";
import { Prestation } from "./prestation";

export class Evaluation {

  // private _noteGlobale: number;
  // private _noteFacilite: number;
  // private _noteQualite: number;
  // private _noteExpertise: number;
  // private _commentaireExpertise: string;
  // private _commentaireFacilite: string;
  // private _commentaireQualite: string;
  // private _commentaireGlobal: string;
  // private _client: Client;
  // private _prestation: Prestation;

  _id:                  string;
  noteGlobale:          number;
  noteFacilite:         number;
  noteQualite:          number;
  noteExpertise:        number;
  commentaireExpertise: string;
  commentaireFacilite:  string;
  commentaireQualite:   string;
  commentaireGlobal:    string;
  client:               Client;
  prestation:           Prestation;

  constructor(noteGlobale: number,
    noteFacilite: number,
    noteQualite: number,
    noteExpertise: number,
    commentaireGlobal: string,
    commentaireFacilite: string,
    commentaireQualite: string,
    commentaireExpertise: string,
    client: Client,
    prestation: Prestation
  ) {
    this.noteGlobale = noteGlobale;
    this.commentaireGlobal = commentaireGlobal;
    this.noteFacilite = noteFacilite;
    this.commentaireFacilite = commentaireFacilite;
    this.noteQualite = noteQualite;
    this.commentaireQualite = commentaireQualite;
    this.noteExpertise = noteExpertise;
    this.commentaireExpertise = commentaireExpertise;
    this.client = client;
    this.prestation = prestation;
  }

  // public get commentaireFacilite(): string {
  //   return this._commentaireFacilite;
  // }

  // public set commentaireFacilite(value: string) {
  //   this._commentaireFacilite = value;
  // }

  // public get noteQualite(): number {
  //   return this._noteQualite;
  // }

  // public set noteQualite(value: number) {
  //   this._noteQualite = value;
  // }

  // public get commentaireQualite(): string {
  //   return this._commentaireQualite;
  // }

  // public set commentaireQualite(value: string) {
  //   this._commentaireQualite = value;
  // }

  // public get noteExpertise(): number {
  //   return this._noteExpertise;
  // }

  // public set noteExpertise(value: number) {
  //   this._noteExpertise = value;
  // }

  // public get commentaireExpertise(): string {
  //   return this._commentaireExpertise;
  // }

  // public set commentaireExpertise(value: string) {
  //   this._commentaireExpertise = value;
  // }

  // public get client(): Client {
  //   return this._client;
  // }

  // public set client(value: Client) {
  //   this._client = value;
  // }

  // public get prestation(): Prestation {
  //   return this._prestation;
  // }

  // public set prestation(value: Prestation) {
  //   this._prestation = value;
  // }

  // public get noteFacilite(): number {
  //   return this._noteFacilite;
  // }

  // public set noteFacilite(value: number) {
  //   this._noteFacilite = value;
  // }

  // public get noteGlobale(): number {
  //   return this._noteGlobale;
  // }

  // public set noteGlobale(value: number) {
  //   this._noteGlobale = value;
  // }

  // public get commentaireGlobal(): string {
  //   return this._commentaireGlobal;
  // }

  // public set commentaireGlobal(value: string) {
  //   this._commentaireGlobal = value;
  // }
}
