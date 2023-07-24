export interface Review {
  text: string;
  rating: number;
  id: string;
}

export interface NewReview extends Omit<Review, "id"> {}
