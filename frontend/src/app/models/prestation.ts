export class Prestation {
  _id: string;
  type: string;
  description: string;
  tauxHoraire: number;
  TVA: number;

  constructor(type: string, description: string, tauxHoraire: number, TVA: number) {
    this.type = type;
    this.description = description;
    this.tauxHoraire = tauxHoraire;
    this.TVA = TVA;
  }
}
