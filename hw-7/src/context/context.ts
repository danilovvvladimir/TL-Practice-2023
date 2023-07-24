import { createContext } from "react";
import { NewReview, Review } from "../types/review";

type ReviewsContextType = {
  reviews: Review[];
  addReview: (review: NewReview) => void;
};

export const ReviewsContext = createContext<ReviewsContextType>({
  reviews: [],
  addReview: () => {},
});
