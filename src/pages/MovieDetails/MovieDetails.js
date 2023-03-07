import { useState, useEffect} from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import { useParams,Link, useLocation } from 'react-router-dom';
import { FilmCard } from 'components/FilmCard/FilmCard';
import { toast } from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Layout } from "components/Layout/Layout";

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null)
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        FetchTMDB.getFullInfoAboutMovie(id)
            .then(setMovie)
            .catch(toast.error('Oops, something wrong'))
    }, [id])
    
    return (
        <>
            <Layout />
            <Link to={location.state?.from ?? `/movies`}> <AiOutlineArrowLeft /> Go back </Link>
            {movie && (<FilmCard film={movie} />)}
        </>
    )
}
