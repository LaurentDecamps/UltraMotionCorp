import mongoose from 'mongoose';

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
  surfaceM2: {
    type: Number,
    required: true
  },
  dateDebut: {
    type: Number,
    required: true
  },
  prestations: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Prestation"
  },
  devis: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Devis"
  }
});

export const Projet = mongoose.model('Projet', ProjetSchema);
