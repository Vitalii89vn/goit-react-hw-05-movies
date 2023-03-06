import { useState, useEffect} from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import { useParams,  } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { CastCard } from "components/CastCard/CastCard";

export const Cast = () => {
    const [filmCast, setFilmCast] = useState(null)

    const { id } = useParams();
  
    useEffect(() => {
        FetchTMDB.getCastFromMovie(id)
            .then(setFilmCast)
            .catch(toast.error('Oops, something wrong'))
    }, [id])
    
    return (
        <div>
         
            {filmCast &&
                (!filmCast.cast.name ? 
                <p>We don't have info from cast for this movie</p> :
                <CastCard filmCast={filmCast } />)}
          </div>
        )
}
