
export const ReviewsCard = ({reviews}) => {
    return (
        reviews.results.map(({ id, author, content }) => (
                    <li key={id}>
                        <h2>Author: {author}</h2>
                        <p>{ content}</p>
                    </li>
                )))
    
}