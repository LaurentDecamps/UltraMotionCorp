import mongoose from 'mongoose';
import { IDevisDocument } from './devis'

export interface INotificationDocument extends mongoose.Document {
  devis: IDevisDocument,
  type: string,
  description: string,
  lue: boolean
}

const NotificationSchema = new mongoose.Schema({
    devis: {
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

export const Notification = mongoose.model('Notification', NotificationSchema);
