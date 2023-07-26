import { FC, useContext } from "react";
import SingleReview from "../SingleReview/SingleReview";
import { ReviewsContext } from "../../context/context";
import "./ReviewList.css";

const ReviewList: FC = () => {
  const { reviews } = useContext(ReviewsContext);

  return (
    <div className="reviews">
      {reviews.length ? (
        reviews.map(review => <SingleReview key={review.id} rating={review.rating} text={review.text} />)
      ) : (
        <h2 className="reviews__title">There are no reviews yet!</h2>
      )}
    </div>
  );
};

export default ReviewList;
