// ==> Libs imports <===
import { FC } from "react";

// ==> Components imports <===

// ==> Other imports <===
import "./SingleReview.css";
import userIMG from "../../assets/images/user-photo.jpg";
import { NewReview } from "../../types/review";

interface ReviewProps extends NewReview {}

const SingleReview: FC<ReviewProps> = ({ text, rating }) => {
  return (
    <article className="review">
      <div className="review__header">
        <div className="review__user">
          <img src={userIMG} alt="Аватар пользователя" className="review__user-photo" />
          <div className="review__user-name">That's you</div>
        </div>
        <div className="review__rating">{rating}/5</div>
      </div>
      <p className="review__text">{text}</p>
    </article>
  );
};

export default SingleReview;
