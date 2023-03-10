import { PropTypes } from 'prop-types';
import '../../default_photos/default_cast.jpeg';
import default_cast from '../../default_photos/default_cast.jpeg';

export const CastCard = ({ filmCast }) => {
    const profile = `https://www.themoviedb.org/t/p/original`;
      
    return (
        <>
            {filmCast.map(({ cast_id, name, character, profile_path }) => (
                <li key={cast_id}>
                    {profile_path ?
                        <img src={`${profile}${profile_path}`} alt={name} width='40' /> :
                        <img src={default_cast} alt="default_cast" width='40' />}
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </>
    )
};

CastCard.propTypes = {
    filmCast: PropTypes.arrayOf(PropTypes.shape({
        cast_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
    })).isRequired
};