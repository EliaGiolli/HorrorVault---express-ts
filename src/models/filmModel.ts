import mongoose, { Schema, Document } from "mongoose";

export interface IFilm extends Document {
    filmTitle: string,
    filmGenre: string,
    filmDescription: string,
    directorName: string,
    year: Date
}

const filmSchema = new Schema({
    filmTitle: { type: String, require:true },
    filmGenre: { type: String, require:true },
    filmDescription: { type: String, required: true },
    directorName: { type: String, require:true },
    year: { type: Date, required: true}
})


export const Film = mongoose.model<IFilm>("Film",filmSchema);