export class Prestation {
  private _type: string;
  private _description: string;
  private _tauxHoraire: Number;
  private _TVA: Number;

  _id: string;
  type: string;
  description: string;
  tauxHoraire: Number;
  TVA: Number;

  constructor(type: string, description: string, tauxHoraire: number, TVA: number) {
    this._type = type;
    this._description = description;
    this._tauxHoraire = tauxHoraire;
    this._TVA = TVA;
  }
}
