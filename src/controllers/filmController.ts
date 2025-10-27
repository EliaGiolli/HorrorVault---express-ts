import { FilmService } from '../services/filmService';

import { Request, Response } from 'express';
import { IFilm } from '../models/filmModel';

const filmService = new FilmService();
//GET :id
export const getSingleFilm = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const newFilm = await filmService.getSigleFilm(id);

        if(newFilm){
            return res.status(200).json(newFilm)
        } else {
            return res.status(404).json({ error: "no film banner found"})
        }

    } catch(err){
        return res.status(500).json({ message: "Server error"})
    }
}

// GET
export const getAllFilms = async (req: Request, res: Response) => {
    try {
        const films = filmService.getFilms();

        if(films) {
            return res.status(200).json(films)
        }else{
            return res.status(404).json({ error: "unable to find film banners"})
        }
    } catch(err) {
        return res.status(500).json({ message: "Server error"})
    }
}

// DELETE
export const deleteFilm = async (req: Request, res: Response) => {

    try{

        const { id } = req.params;
        const deletedFilm = filmService.deleteFilm(id);

        if(deletedFilm) {
            return res.status(200).json(deletedFilm)
        } else{
            return res.status(404).json({ error: "unable to find film banners"})
        }

    } catch(err) {
        return res.status(500).json({ message: "Server error"})
    }
}

// UPDATE
export async function updateFilm(req:Request, res: Response) {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (updateData.releaseDate && typeof updateData.releaseDate === "string") {
            const { releaseDate, ...rest } = updateData;
            const updateDataWithDate: Partial<IFilm> = {
                ...rest,
                releaseDate: new Date(releaseDate)
            };

            const updatedFilm = await filmService.updateFilm(id, updateDataWithDate );

            if (updatedFilm) {
                return res.status(200).json(updatedFilm);
            } else {
                return res.status(404).json({ error: 'Film not found' });
            }
        } else {
            const updatedFilm = await filmService.updateFilm(id, updateData as Partial<IFilm>);

            if (updatedFilm) {
                return res.status(200).json(updatedFilm);
            } else {
                return res.status(404).json({ error: 'Film not found' });
            }
        }
    } catch (error) {
        console.error("Error updating film:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


// CREATE

export const createFilmBanner = async (req: Request, res: Response) => {

    try {
        
        const { filmTitle, filmDescription, filmGenre, directorName, year } = req.body;
        
        if (!filmTitle || !filmDescription || !filmGenre || directorName || year) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        
        const newFilmBanner = await filmService.createNewFilmBanner(
            filmTitle, filmDescription, filmGenre, directorName, year
        );
        return res.status(201).json(newFilmBanner);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}