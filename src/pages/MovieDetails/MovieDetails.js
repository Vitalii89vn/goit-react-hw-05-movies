import { useState, useEffect} from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import {useParams } from 'react-router-dom'
import { format} from 'date-fns'

export const MovieDetails = () => {
    const [movie, setMovie] = useState({})

    const { id } = useParams();

    useEffect(() => {
        FetchTMDB.getFullInfoAboutMovie(id)
            .then(setMovie)
            .catch(()=> {throw new Error('ergggg')})  
    }, [id])
    console.log(movie)
    
    const API_KEY = 'c28a60c35f7c1f6eafdc45cc0b774d29';
    const poster = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&poster_path=${movie.poster_path}`
    // const year = format(Date.parse(movie.release_date), 'yyyy')
    return (
        //   {movie.}
        <div>
            <img src={poster} alt={ movie.title} />
            <h2>{movie.title} ({format(Date.parse(movie.release_date), 'yyyy')})</h2>
        </div>
    )
}
// flatpickr.dateFormat:"YYYY"