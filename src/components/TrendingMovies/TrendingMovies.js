import { Link } from "react-router-dom";

export const TrendingMovies = ({ movies }) => {
    return (
        <div>
        <h2>Trending today</h2>
        <ol>
            {movies.map(({id, title}) => (
                <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
                </li>
            ))}
        </ol></div>
    )
}