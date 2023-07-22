// ==> Libs imports <===
import { FC, FormEvent, ChangeEvent, useState } from "react";

// ==> Components imports <===
import RangeInput from "../UI/RangeInput/RangeInput";
import Button from "../UI/Button/Button";

// ==> Other imports <===
import "./Form.css";
import { Rating } from "../../types/formTypes";
import { ratingCategories } from "../../constants/ratingCategories";

const initialRatingState: Rating = ratingCategories.reduce(
  (acc, category) => ({ ...acc, [category.key]: 1 }),
  {} as Rating,
);

const Form: FC = () => {
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRating(initialRatingState);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name as keyof Rating;
    const value = parseInt(event.target.value, 10);

    updateRating(category, value);
  };

  return (
    <form className="reply__form" onSubmit={handleSubmit}>
      <div className="reply__form-rating">{calculateTotalRating()}/5</div>
      <div className="reply__form-skills">
        {ratingCategories.map(category => (
          <label className="reply__form-label" key={category.key}>
            <RangeInput
              className="reply__form-range-input"
              name={category.key}
              min={1}
              max={5}
              value={rating[category.key]}
              onChange={handleChange}
            />
            {category.label}
          </label>
        ))}
      </div>

      <textarea className="reply__form-textarea" placeholder="What could we improve?" />

      <Button type="submit" className="reply__form-button">
        Send
      </Button>
    </form>
  );
};

export default Form;
