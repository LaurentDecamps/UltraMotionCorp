import mongoose from 'mongoose';
import { INotificationDocument } from './notification';
import { IPrestationDocument } from './prestation';

export interface IEntrepriseDocument extends mongoose.Document {
  nom: String,
  description: String,    
  email:  String,
  motDePasse: String,
  numeroTelephone: String,    
  adresse: String,
  prestations: [IPrestationDocument],
  notifications: [INotificationDocument]
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
  }],
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notification"
  }]
});

export const Entreprise = mongoose.model<IEntrepriseDocument>('Entreprise', EntrepriseSchema);
