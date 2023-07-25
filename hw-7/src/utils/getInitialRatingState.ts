import { ratingCategories } from "../constants/ratingCategories";
import { RatingCategory, RatingRecord } from "../types";

export const getInitialRatingState = () => {
  const initialRatingState: { [key in RatingCategory]: number } = {} as RatingRecord;
  ratingCategories.forEach(category => {
    initialRatingState[category.key] = 1;
  });
  return initialRatingState;
};
