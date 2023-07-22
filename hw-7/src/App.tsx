// ==> Libs imports <===
import { FC, createContext, useState } from "react";

// ==> Components imports <===
import Form from "./components/Form/Form";
import ReviewList from "./components/ReviewList/ReviewList";

// ==> Other imports <===
import { Review } from "./types/reviewsTypes";

type ReviewsContextType = {
  reviews: Review[];
  addReview: (review: Omit<Review, "id">) => void;
};

export const ReviewsContext = createContext<ReviewsContextType>({
  reviews: [],
  addReview: () => {},
});
const App: FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addReview = ({ text, rating }: Omit<Review, "id">) => {
    const newId = reviews.length > 0 ? reviews[reviews.length - 1].id + 1 : 1;
    const newReview = { text, rating, id: newId };

    setReviews([...reviews, newReview]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      <section className="reply">
        <div className="container">
          <div className="reply__wrapper">
            <h1 className="title reply__title">How nice was my reply?</h1>
            <Form />
            <ReviewList />
          </div>
        </div>
      </section>
    </ReviewsContext.Provider>
  );
};

export default App;

