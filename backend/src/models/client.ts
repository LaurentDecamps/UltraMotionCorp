import mongoose from 'mongoose';
import { INotificationDocument } from './notification';
import { IProjetDocument } from './projet';

export interface IClientDocument extends mongoose.Document {
  nom: string,
  prenom: string,
  email: string,
  motDePasse: string,
  numeroTelephone: string,
  adresse: string,
  projets: IProjetDocument[],
  notifications: INotificationDocument[]
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
  }],
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notification"
  }]
});

export const Client = mongoose.model('Client', ClientSchema);
