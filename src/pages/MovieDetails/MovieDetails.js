import { useState, useEffect, useParams } from "react";
import * as FetchTMDB from "utils/FetchTMDB";


export const MovieDetails = () => {
    const [movie, setMovie] = useState(null)

    const { movieId } = useParams();

    useEffect(() => {
        FetchTMDB.getFullInfoAboutMovie(movieId)
            .then(setMovie) 
            .catch(()=> {throw new Error('ergggg')})  
    }, [movieId])
    
    return (
        <div>
            <h2>{ movie.title}</h2>
        </div>
    )
}