// ==> Libs imports <===
import { FC, useContext } from "react";

// ==> Components imports <===
import SingleReview from "../SingleReview/SingleReview";

// ==> Other imports <===
import "./ReviewList.css";
import { ReviewsContext } from "../../App";

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
