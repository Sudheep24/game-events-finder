import { Schema, model, models, Document } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    eventname: string;
    description?: string;
    address?: string;
    date: Date;
    time: string;
    entryfee?: string;
    totalslots?: string;
    available?: string;
    imageUrl: string; // Changed from img to imageUrl
    category: { _id: string, name: string };
    organizer: { _id: string, firstName: string, LastName: string };
}

const EventSchema = new Schema({
    eventname: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    entryfee: { type: String },
    totalslots: { type: String },
    available: { type: String },
    imageUrl: { type: String, required: true }, // Changed from img to imageUrl
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Event = models.Event || model('Event', EventSchema);

export default Event;
