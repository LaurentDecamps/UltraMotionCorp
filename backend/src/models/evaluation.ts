import mongoose from 'mongoose';

const EvaluationSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client"
  },
  prestation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  },
  noteGlobale: {
    type: Number,
    required: false
  },
  commentaireGlobal: {
    type: String,
    required: false
  },
  noteFacilite: {
    type: Number,
    required: false
  },
  commentaireFacilite: {
    type: String,
    required: false
  },
  noteQualite: {
    type: Number,
    required: false
  },
  commentaireQualite: {
    type: String,
    required: false
  }, 
  noteExpertise: {
    type: Number,
    required: false
  },
  commentaireExpertise: {
    type: String,
    required: false
  }
});

export const Evaluation = mongoose.model('Evaluation', EvaluationSchema);
