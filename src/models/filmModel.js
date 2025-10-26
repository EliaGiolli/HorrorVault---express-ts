import mongoose, { Schema } from "mongoose";

const filmSchema = new Schema({
    filmTitle: { type: String, require:true },
    filmGenre: { type: String, require:true },
    filmDescription: { type: String, required: true },
    directorName: { type: String, require:true },
    year: { type: Date, required: true}
})


export const Film = mongoose.model(filmSchema);