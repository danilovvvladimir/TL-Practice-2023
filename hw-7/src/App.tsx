// ==> Libs imports <===
import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// ==> Components imports <===
import Reply from "./components/Reply/Reply";

// ==> Other imports <===
import { NewReview, Review } from "./types/review";
import { ReviewsContext } from "./context/context";

const App: FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addReview = ({ text, rating }: NewReview) => {
    const newReview = { text, rating, id: uuidv4() };

    setReviews([newReview, ...reviews]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      <Reply />
    </ReviewsContext.Provider>
  );
};

export default App;

