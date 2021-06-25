import mongoose from 'mongoose';

export interface IProjetDocument extends mongoose.Document {

}

const ProjetSchema = new mongoose.Schema({
});

export const Projet = mongoose.model<IProjetDocument>('Projet', ProjetSchema);
