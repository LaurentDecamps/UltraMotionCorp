import mongoose from 'mongoose';
import { IPrestationDocument } from './prestation';

export interface IDevisDocument extends mongoose.Document {
  etat: String,
  titre: String,
  prestations: IPrestationDocument[]
}
const DevisSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  etat: {
    type: String,
    required: true
  },
  tempsPrestationJours: {
    type: Number,
    required: true
  },
  prixMateriel: {
    type: Number,
    required: true
  },
  prestation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  },
  projet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projet"
  },
  entreprise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entreprise"
  }    
});

export const Devis = mongoose.model('Devis', DevisSchema);
