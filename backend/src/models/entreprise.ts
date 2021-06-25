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
  email: {
    type: String,
    required: true
  },
  motDePasse: {
    type: String,
    required: true
  },
  numeroTelephone: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  Prestations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  }]
});

export const Entreprise = mongoose.model<IEntrepriseDocument>('Entreprise', EntrepriseSchema);
