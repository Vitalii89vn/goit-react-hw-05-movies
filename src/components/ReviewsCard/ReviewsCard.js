import { PropTypes } from 'prop-types';


export const ReviewsCard = ({ reviews }) => {
    return (
        reviews.map(({ id, author, content }) => (
            <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
            </li>
        )))
    
};

ReviewsCard.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })).isRequired
}