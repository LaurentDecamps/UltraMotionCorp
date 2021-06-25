import mongoose from 'mongoose';

export interface IProjetDocument extends mongoose.Document {

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
  surfaceM2: {
    type: Number,
    required: true
  },
  dateDebut: {
    type: Number,
    required: true
  },  
  prestations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  }]
});

export const Projet = mongoose.model<IProjetDocument>('Projet', ProjetSchema);
