import { format } from 'date-fns';
import { Link, Outlet} from 'react-router-dom';

export const FilmCard = ({ film }) => {
    const {title, release_date, vote_average, overview, genres, poster_path } = film;
    const releaseYear = format(Date.parse(release_date), 'yyyy');
    const poster =`https://www.themoviedb.org/t/p/original${poster_path}`
    // `https://api.themoviedb.org/3/movie/${id}?api_key=c28a60c35f7c1f6eafdc45cc0b774d29&poster_path=${poster_path}`
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F411-the-chronicles-of-narnia-the-lion-the-witch-and-the-wardrobe%2Fimages%2Fposters%3Fimage_language%3Den%26language%3Dru&psig=AOvVaw3_d_nr-DRNhDPlK7SL45R5&ust=1678271232988000&source=images&cd=vfe&ved=2ahUKEwiS5dnWzcn9AhWQsyoKHZRLCvkQr4kDegUIARCLAQ
    console.log(poster_path)
    // 
    // iREd0rNCjYdf5Ar0vfaW32yrkm.jpg
    return (
             
        <div>
            <div>
                <img src={poster} alt={title} width='200' />
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