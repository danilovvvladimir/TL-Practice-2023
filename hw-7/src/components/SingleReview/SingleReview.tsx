// ==> Libs imports <===
import { FC } from "react";

// ==> Components imports <===

// ==> Other imports <===
import "./SingleReview.css";
import userIMG from "../../assets/images/user-photo.jpg";
import { Review } from "../../types/reviewsTypes";

interface ReviewProps extends Omit<Review, "id"> {}

const SingleReview: FC<ReviewProps> = ({ text, rating }) => {
  return (
    <div className="review">
      <div className="review__top">
        <div className="review__user">
          <img src={userIMG} alt="user-avatar" className="review__user-photo" />
          <div className="review__user-name">That's you</div>
        </div>
        <div className="review__rating">{rating}/5</div>
      </div>
      <div className="review__text">{text}</div>
    </div>
  );
};

export default SingleReview;
