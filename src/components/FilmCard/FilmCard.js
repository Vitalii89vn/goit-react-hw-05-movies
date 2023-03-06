import { format } from 'date-fns';
import { Link, Outlet} from 'react-router-dom';

export const FilmCard = ({ film }) => {
    const {title, release_date, vote_average, overview, genres } = film;
    const releaseYear = format(Date.parse(release_date), 'yyyy');

    return (
             
        <div>
            <div>
                <img src={film.poster_path} alt={title} />
                <h2>{title} ({releaseYear}) </h2>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{genres.map(({ id, name }) => (<li key={id}>{name}</li>))}</p>
            </div>
            <p>Additional information</p>
            <div>
                <Link to={`cast`} > Cast</Link>
                <Link to={`reviews`} > Reviews</Link>
            </div>
            <Outlet />
        </div>
    )
};