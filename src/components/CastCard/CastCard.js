
export const CastCard = ({ filmCast }) => {
    return (
        filmCast.cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
            <img src={profile_path} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )))
};