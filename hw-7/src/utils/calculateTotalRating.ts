import { Rating } from "../types/formTypes";

export const calculateTotalRating = (rating: Rating) => {
  const ratingsArray = Object.values(rating);

  const totalRating = ratingsArray.reduce((acc, value) => acc + value, 0);
  const averageRating = totalRating / ratingsArray.length;
  const roundedAverageRating = Math.round(averageRating * 100) / 100;

  return roundedAverageRating;
};
