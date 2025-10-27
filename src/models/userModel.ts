import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    userId: string,
    username: string,
    email: string,
    hashedPassword: string
}

const userSchema = new Schema({
    userId: { type: String, require: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model<IUser>("User", userSchema);