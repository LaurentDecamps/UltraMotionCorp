import { Entreprise } from "./entreprise";
import { Prestation } from "./prestation";
import { Projet } from "./projets";

export class Devis {
  _id: string;
  titre: string;
  etat: string;
  tempsPrestationJours: number;
  prixMateriel: number;
  prixPrestation: number;
  projet: Projet;
  prestation: Prestation;
  entreprise: Entreprise;
}
