import { Client } from "./client";
import { Prestation } from "./prestation";

export class Evaluation {
  private _noteGlobale: number;
  private _commentaireGlobal: string;
  private _noteFacilite: number;
  public get noteFacilite(): number {
    return this._noteFacilite;
  }
  public set noteFacilite(value: number) {
    this._noteFacilite = value;
  }
  private _commentaireFacilite: string;
  public get commentaireFacilite(): string {
    return this._commentaireFacilite;
  }
  public set commentaireFacilite(value: string) {
    this._commentaireFacilite = value;
  }
  private _noteQualite: number;
  public get noteQualite(): number {
    return this._noteQualite;
  }
  public set noteQualite(value: number) {
    this._noteQualite = value;
  }
  private _commentaireQualite: string;
  public get commentaireQualite(): string {
    return this._commentaireQualite;
  }
  public set commentaireQualite(value: string) {
    this._commentaireQualite = value;
  }
  private _noteExpertise: number;
  public get noteExpertise(): number {
    return this._noteExpertise;
  }
  public set noteExpertise(value: number) {
    this._noteExpertise = value;
  }
  private _commentaireExpertise: string;
  public get commentaireExpertise(): string {
    return this._commentaireExpertise;
  }
  public set commentaireExpertise(value: string) {
    this._commentaireExpertise = value;
  }
  private _client: Client;
  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }
  private _prestation: Prestation;
  public get prestation(): Prestation {
    return this._prestation;
  }
  public set prestation(value: Prestation) {
    this._prestation = value;
  }

  constructor(noteGlobale: number,
    commentaireGlobal: string,
    noteFacilite: number,
    commentaireFacilite: string,
    noteQualite: number,
    commentaireQualite: string,
    noteExpertise: number,
    commentaireExpertise: string,
    client: Client,
    prestation: Prestation
  ) {
    this._noteGlobale = noteGlobale;
    this._commentaireGlobal = commentaireGlobal;
    this._noteFacilite = noteFacilite;
    this._commentaireFacilite = commentaireFacilite;
    this._noteQualite = noteQualite;
    this._commentaireQualite = commentaireQualite;
    this._noteExpertise = noteExpertise;
    this._commentaireExpertise = commentaireExpertise;
    this._client = client;
    this._prestation = prestation;
  }

  public get noteGlobale(): number {
    return this._noteGlobale;
  }

  public set noteGlobale(value: number) {
    this._noteGlobale = value;
  }

  public get commentaireGlobal(): string {
    return this._commentaireGlobal;
  }

  public set commentaireGlobal(value: string) {
    this._commentaireGlobal = value;
  }
}
