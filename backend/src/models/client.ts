import mongoose from 'mongoose';

export interface IClientDocument extends mongoose.Document {
  nom: String,
  duree: Number
}

const ClientSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
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
    required: false
  },
  adresse: {
    type: String,
    required: false
  },
  projets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projet"
  }]
});

export const Client = mongoose.model<IClientDocument>('Client', ClientSchema);
