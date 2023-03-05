import { Link } from "react-router-dom";

export const TrendingMovies = ({ movies }) => {
    return (
        <ol>
            {movies.map(({id, title}) => (
                <li key={id}>
                    <Link to='/movies/:moveiId'>{title}</Link>
                </li>
            ))}
        </ol>
    )
}