import mongoose from 'mongoose';

const DevisSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  etat: {
    type: String,
    required: true
  },
  prestations: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Prestation"
  }
});

export const devis = mongoose.model('Devis', DevisSchema);
