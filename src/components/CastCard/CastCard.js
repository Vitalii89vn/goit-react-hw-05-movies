
export const CastCard = ({ filmCast }) => {
    //  const profile =`https://www.themoviedb.org/t/p/original${filmCast.cast.profile_path}`
    return (
        filmCast.cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
                <img src={`https://www.themoviedb.org/t/p/original${profile_path}`} alt={name} width='50'/>
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )))
};