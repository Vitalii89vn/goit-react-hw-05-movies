
export const CastCard = ({ filmCast }) => {
     const profile =`https://www.themoviedb.org/t/p/original`
    return (
        filmCast.cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
                {profile_path && <img src={`${profile}${profile_path}`} alt={name} width='50'/>}
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )))
};