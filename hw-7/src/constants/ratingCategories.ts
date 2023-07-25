import { Category, RatingCategory } from "../types/form";

export const ratingCategories: ReadonlyArray<Category> = Object.values(RatingCategory).map(key => ({
  key,
  label: key,
}));
