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
  note: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export const Evaluation = mongoose.model('Evaluation', EvaluationSchema);
