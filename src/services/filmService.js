import { Film } from "../models/filmModel";

export async function getSigleFilm(_id) {
    return await Film.findOne({ _id })
}

export async function getFilms() {
    return await Film.find();
}

export async function createNewFilmBanner(filmTitle, filmDescription, filmGenre, directorName, year) {
    const newFilmBanner = new Film({
        filmTitle,
        filmDescription,
        filmGenre,
        directorName,
        year
    });

    if(!newFilmBanner) throw new Error("Unable to create a new film banner");

    await newFilmBanner.save();

    return newFilmBanner;
}

export async function deleteFilm(_id) {

    const removedFilm = Film.findOneAndDelete({ _id });

    if(removedFilm) {

        return removedFilm;

    } else {

        throw new Error("Unable to delete a new film banner");

    }

}

export async function updateFilm(_id, updateData) {

    const updatedFilmBanner = await Film.findByIdAndUpdate(_id, updateData, { new: true })

    return updatedFilmBanner;
}