import {Devis} from "./devis";

export class Notification {

  _id: string;
  type: string;
  description: string;
  lue: boolean;
  devis: Devis;

  constructor(type: string, description: string, lue: boolean, devis: Devis) {
    this.type = type;
    this.description = description;
    this.lue = lue;
    this.devis = devis;
  }
}
