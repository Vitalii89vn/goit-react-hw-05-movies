import { format } from 'date-fns'

export const FilmCard = ({ film }) => {
    const year = format(Date.parse(film.release_date), 'yyyy')
    return (
             
        <div>
            <img src={film.poster_path} alt={film.title} />
            <h2>{film.title} ({year})
            </h2>

        </div>
    )
}