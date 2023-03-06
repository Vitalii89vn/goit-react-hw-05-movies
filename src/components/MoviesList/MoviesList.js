import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
    const location = useLocation();
    return (
        <ol>
            {films.map(({id, title}) => (
                <li key={id}>
                    <Link to={`${id}`} state={{ from: location }}>{title}</Link>  
                </li>
            ))}
        </ol>
    )
}