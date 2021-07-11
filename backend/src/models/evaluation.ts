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
  noteGlobale: {
    type: Number,
    required: true
  },
  commentaireGlobal: {
    type: String,
    required: true
  },
  noteFacilite: {
    type: Number,
    required: true
  },
  commentaireFacilite: {
    type: String,
    required: true
  },
  noteQualite: {
    type: Number,
    required: true
  },
  commentaireQualite: {
    type: String,
    required: true
  }, 
  noteExpertise: {
    type: Number,
    required: true
  },
  commentaireExpertise: {
    type: String,
    required: true
  }
});

export const Evaluation = mongoose.model<IEvaluationDocument>('Evaluation', EvaluationSchema);
