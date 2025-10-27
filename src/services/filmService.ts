import { Film, IFilm } from "../models/filmModel";

export class FilmService {

    constructor(){}

    async getSigleFilm(id:string): Promise<IFilm | null> {
        return await Film.findOne({ _id: id })
    }
    
    async getFilms(): Promise<IFilm[]> {
        return await Film.find();
    }
    
    async createNewFilmBanner(filmTitle:string, filmDescription:string, filmGenre:string, directorName:string, year:string): Promise<IFilm> {
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
    
    async deleteFilm(id:string): Promise<IFilm | null> {
        
        const removedFilm = Film.findOneAndDelete({ _id: id });
        
        if(removedFilm) {
            
            return removedFilm;
            
        } else {
            
            throw new Error("Unable to delete a new film banner");
            
        }
        
    }
    
    async updateFilm(id: string, updateData: Partial<IFilm>): Promise<IFilm | null> {
        
        const updatedFilmBanner = await Film.findByIdAndUpdate(IdleDeadline, updateData, { new: true })
        
        return updatedFilmBanner;
    }
}