import mongoose from 'mongoose';

export interface IEvaluationDocument extends mongoose.Document {
  nom: String,
  duree: Number
}

const EvaluationSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client"
  },
  prestation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prestation"
  },
  note: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export const Evaluation = mongoose.model<IEvaluationDocument>('Evaluation', EvaluationSchema);
