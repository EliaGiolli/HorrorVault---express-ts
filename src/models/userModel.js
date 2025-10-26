import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    userId: { type: String, require: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    hashedPassword: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model(userSchema);