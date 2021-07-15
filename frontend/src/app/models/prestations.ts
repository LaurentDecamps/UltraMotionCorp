export class Prestations {
  private _type : string;
  private _description : string;
  private _tauxHoraire : number;
  private _TVA : number;

  constructor(type : string, description : string, tauxHoraire : number, TVA : number) {
    this._type = type;
    this._description = description;
    this._tauxHoraire = tauxHoraire;
    this._TVA = TVA;
  }

  public get type(): string {
    return this._type;
  }

  public get description(): string {
    return this._description
  }
}
