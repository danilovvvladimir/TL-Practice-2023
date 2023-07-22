// ==> Libs imports <===
import { FC, useState } from "react";

// ==> Components imports <===
import Form from "./components/Form/Form";

// ==> Other imports <===
import { Rating } from "./types/formTypes";
import { ratingCategories } from "./constants/ratingCategories";

const initialRatingState: Rating = ratingCategories.reduce(
  (acc, category) => ({ ...acc, [category.key]: 0 }),
  {} as Rating,
);

const App: FC = () => {
  const [rating, setRating] = useState<Rating>(initialRatingState);

  const calculateTotalRating = () => {
    const ratingsArray = Object.values(rating);

    const totalRating = ratingsArray.reduce((acc, value) => acc + value, 0);
    const averageRating = totalRating / ratingsArray.length;
    const roundedAverageRating = Math.round(averageRating * 100) / 100;

    return roundedAverageRating;
  };

  const updateRating = (category: keyof Rating, value: number) => {
    setRating(prevRating => ({ ...prevRating, [category]: value }));
  };

  return (
    <section className="reply">
      <div className="container">
        <div className="reply__wrapper">
          <h1 className="title reply__title">How nice was my reply? {calculateTotalRating()}/5</h1>
          <Form updateRating={updateRating} rating={rating} />
        </div>
      </div>
    </section>
  );
};

export default App;

