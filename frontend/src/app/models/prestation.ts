export class Prestation {
  private _type: string;
  private _description: string;
  private _tauxHoraire: number;
  private _TVA: number;
  _id: string;

  constructor(type: string, description: string, tauxHoraire: number, TVA: number) {
    this._type = type;
    this._description = description;
    this._tauxHoraire = tauxHoraire;
    this._TVA = TVA;
  }

  public get type(): string {
    return this._type;
  }

  public set type(value: string) {
    this._type = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get tauxHoraire(): number {
    return this._tauxHoraire
  }

  public set tauxHoraire(value: number) {
    this._tauxHoraire = value;
  }

  public get TVA(): number {
    return this._TVA;
  }

  public set TVA(value: number) {
    this._TVA = value;
  }
}
