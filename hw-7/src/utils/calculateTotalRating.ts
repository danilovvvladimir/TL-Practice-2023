import { RatingRecord } from "../types/form";

export const calculateTotalRating = (rating: RatingRecord) => {
  const ratingsArray = Object.values(rating);

  const totalRating = ratingsArray.reduce((acc, value) => acc + value, 0);
  const averageRating = totalRating / ratingsArray.length;
  const roundedAverageRating = Math.round(averageRating * 100) / 100;

  return roundedAverageRating;
};
