import { Link } from 'react-router-dom';

export const MoviesList = ({films}) => {
    return (
        <ol>
            {films.map(({id, title}) => (
                <li key={id}>
                    {/* {title} */}
                  <Link to={`${id}`}>{title}</Link>  
                </li>
            ))}
        </ol>
    )
}