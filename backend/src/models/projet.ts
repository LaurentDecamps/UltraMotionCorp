import mongoose from 'mongoose';
import { IDevisDocument } from './devis';
import { IPrestationDocument } from './prestation';

export interface IProjetDocument extends mongoose.Document {
  typeBien: string,
  niveauBien: string,
  description: string,
  surfacem2: string,
  dateDebut: Date,
  prestations: IPrestationDocument,
  devis: IDevisDocument
}

const ProjetSchema = new mongoose.Schema({
  typeBien: {
    type: String,
    required: true
  },
  niveauBien: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  surfacem2: {
    type: Number,
    required: true
  },
  dateDebut: {
    type: Date,
    required: true
  },
  prestations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  }],
  devis: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Devis"
  }],
  entreprises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entreprise"
  }]
});

export const Projet = mongoose.model('Projet', ProjetSchema);
