import {
    getSingleFilm, 
    getAllFilms, 
    deleteFilm, 
    createFilmBanner, 
    updateFilm
} from '../controllers/filmController';

import { authMiddleware } from '../middleware/authMiddleware';
import express from 'express';

export const filmRouter = express.Router();

// Middleware - protect routes
filmRouter.use(authMiddleware);

// GET :id
filmRouter.get('/:id', getSingleFilm);

// GET
filmRouter.get('/', getAllFilms);

// DELETE
filmRouter.delete('/:id', deleteFilm);

// UPDATE
filmRouter.put('/:id', updateFilm);

// POST
filmRouter.post('/:id/banner', createFilmBanner);