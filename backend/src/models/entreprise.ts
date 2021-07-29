import mongoose from 'mongoose';

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
  prestations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  }],
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notification"
  }]
});

export const Entreprise = mongoose.model('Entreprise', EntrepriseSchema);
