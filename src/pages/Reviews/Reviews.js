import { useState, useEffect} from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import { useParams } from 'react-router-dom';
import { ReviewsCard } from "components/ReviewsCard/ReviewsCard";

export const Reviews = () => {
    const [filmReviews, setFilmReviews] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        FetchTMDB.getReviewsFromMovie(id)
            .then(setFilmReviews)
    }, [id])
    
    return (
        <div>
            {filmReviews &&
                (filmReviews.total_results === 0 ?
                    <p>We don't have any reviews for this movie</p> :
                    <ReviewsCard reviews={filmReviews.results} />)
            }
        </div>
    )
};
export default Reviews;