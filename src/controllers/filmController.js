import {
    getFilms, 
    getSigleFilm, 
    deleteFilm, 
    updateFilm, 
    createNewFilmBanner
} from '../services/filmService';

//GET :id
export const getSingleFilm = async (req, res) => {

    try {
        const { id } = req.params;
        const newFilm = await getSigleFilm(id);

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
export const getAllFilms = async (req, res) => {
    try {
        const films = getFilms();

        if(films) {
            return res.status(200).json(films)
        }else{
            return res.status({ error: "unable to find film banners"})
        }
    } catch(err) {
        return res.status(500).json({ message: "Server error"})
    }
}

// DELETE
export const deleteFilm = async (req, res) => {

    try{

        const { id } = req.params;
        const deletedFilm = deleteFilm(id);

        if(deletedFilm) {
            return res.status(200).json(deletedFilm)
        } else{
            return res.status({ error: "unable to find film banners"})
        }

    } catch(err) {
        return res.status(500).json({ message: "Server error"})
    }
}

// UPDATE
export async function updateFilm(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (updateData.releaseDate && typeof updateData.releaseDate === "string") {
            const { releaseDate, ...rest } = updateData;
            const updateDataWithDate = {
                ...rest,
                releaseDate: new Date(releaseDate)
            };

            const updatedFilm = await Film.findByIdAndUpdate(id, updateDataWithDate, { new: true });

            if (updatedFilm) {
                return res.status(200).json(updatedFilm);
            } else {
                return res.status(404).json({ error: 'Film not found' });
            }
        } else {
            const updatedFilm = await Film.findByIdAndUpdate(id, updateData, { new: true });

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

export const createFilmBanner = async (req, res) => {

    try {
        
        const { filmTitle, filmDescription, filmGenre, directorName, year } = req.body;
        
        if (!filmTitle || !filmDescription || !filmGenre || directorName || year) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        
        const newFilmBanner = await createNewFilmBanner(
            filmTitle, filmDescription, filmGenre, directorName, year
        );
        return res.status(201).json(newFilmBanner);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}