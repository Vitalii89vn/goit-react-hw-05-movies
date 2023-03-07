import { Link, useLocation } from "react-router-dom";

export const TrendingMovies = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
        <h2>Trending today</h2>
        <ol>
            {movies.map(({id, title}) => (
                <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                </li>
            ))}
        </ol></div>
    )
}