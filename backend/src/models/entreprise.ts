import mongoose from 'mongoose';

export interface IEntrepriseDocument extends mongoose.Document {
  nom: String,
  duree: Number
}

const EntrepriseSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  Prestations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  }]
});

export const Entreprise = mongoose.model<IEntrepriseDocument>('Entreprise', EntrepriseSchema);
