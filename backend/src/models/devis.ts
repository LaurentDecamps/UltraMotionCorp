import mongoose from 'mongoose';
import { IPrestationDocument } from './prestation';

export interface IDevisDocument extends mongoose.Document {
    etat: String,
    titre: String,
    prestations: [IPrestationDocument]
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
  prestations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  }]
});

export const devis = mongoose.model<IDevisDocument>('Devis', DevisSchema);
