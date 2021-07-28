import mongoose from 'mongoose';

export interface IPrestationDocument extends mongoose.Document {
  type: string,
  description: string,
  tauxHoraire: number
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
  },
  TVA: {
    type: Number,
    required: true
  }
});

export const Prestation = mongoose.model('Prestation', PrestationSchema);