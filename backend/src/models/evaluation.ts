import mongoose from 'mongoose';
import { IClientDocument } from './client';
import { IPrestationDocument } from './prestation';

export interface IEvaluationDocument extends mongoose.Document {
  client: IClientDocument,
  prestation: IPrestationDocument,
  note: Number,
  description: String
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
