import { format } from 'date-fns';
import { Link, Outlet, useLocation} from 'react-router-dom';

export const FilmCard = ({ film }) => {
    const {title, release_date, vote_average, overview, genres, poster_path } = film;
    const releaseYear = format(Date.parse(release_date), 'yyyy');
    const poster =`https://www.themoviedb.org/t/p/original${poster_path}`
  const location = useLocation()
    return (
             
        <div>
            <div>
                {poster_path && <img src={poster} alt={title} width='200' />}
                <h2>{title} ({releaseYear}) </h2>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{genres.map(({ id, name }) => (<li key={id}>{name}</li>))}</p>
            </div>
            <p>Additional information</p>
            <div>
                <Link to={`cast`} state={location.state}> Cast</Link>
                <Link to={`reviews`} state={location.state}> Reviews</Link>
            </div>
            <Outlet />
        </div>
    )
};