import mongoose from 'mongoose';
import { IDevisDocument } from './devis';

export interface INotificationDocument extends mongoose.Document {
    devis: IDevisDocument,
    type: String,
    description: String,
    lue: Boolean
}

const NotificationSchema = new mongoose.Schema({
    idDevis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Devis"
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lue: {
        type: Boolean,
        required: true
    }
});

export const Notification = mongoose.model<INotificationDocument>('Notification', NotificationSchema);