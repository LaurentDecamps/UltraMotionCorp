import mongoose from 'mongoose';

export interface IPrestationDocument extends mongoose.Document {
  nom: String,
  duree: Number
}

const PrestationSchema = new mongoose.Schema({
    type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  tauxHoraire: {
    type: Number,
    required: true
  }
});

export const Prestation = mongoose.model<IPrestationDocument>('Prestation', PrestationSchema);
