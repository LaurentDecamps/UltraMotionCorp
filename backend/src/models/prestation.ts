import mongoose from 'mongoose';

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

export const Prestation = mongoose.model('Prestation', PrestationSchema);
