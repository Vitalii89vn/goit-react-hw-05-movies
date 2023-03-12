import { useState, useEffect} from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import { useParams  } from 'react-router-dom';
import { CastCard } from "components/CastCard/CastCard";

const Cast = () => {
    const [filmCast, setFilmCast] = useState(null)

    const { id } = useParams();
  
    useEffect(() => {
        FetchTMDB.getCastFromMovie(id)
            .then(setFilmCast)
    }, [id])

    return (
        <div>
        
            {filmCast &&
                (filmCast.cast.length === 0 ?
                    <p>We don't have any info about cast for this movie</p> :
                    <CastCard filmCast={filmCast.cast} />
                )}
        </div>
    )
};
export default Cast
