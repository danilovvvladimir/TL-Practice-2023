// ==> Libs imports <===
import { FC, FormEvent, ChangeEvent, useState, useContext } from "react";

// ==> Components imports <===
import RangeInput from "../UI/RangeInput/RangeInput";
import Button from "../UI/Button/Button";

// ==> Other imports <===
import "./Form.css";
import { Rating } from "../../types/formTypes";
import { ratingCategories } from "../../constants/ratingCategories";
import { ReviewsContext } from "../../App";
import { calculateTotalRating } from "../../utils/calculateTotalRating";

const initialRatingState: Rating = ratingCategories.reduce(
  (acc, category) => ({ ...acc, [category.key]: 1 }),
  {} as Rating,
);

const initialTextState = "";

const Form: FC = () => {
  const { addReview } = useContext(ReviewsContext);

  const [rating, setRating] = useState<Rating>(initialRatingState);
  const [text, setText] = useState(initialTextState);

  const totalRating = calculateTotalRating(rating);

  const updateRating = (category: keyof Rating, value: number) => {
    setRating(prevRating => ({ ...prevRating, [category]: value }));
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name as keyof Rating;
    const value = parseInt(event.target.value, 10);

    updateRating(category, value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addReview({ text, rating: totalRating });

    setRating(initialRatingState);
    setText(initialTextState);
  };

  return (
    <form className="reply__form" onSubmit={handleSubmit}>
      <div className="reply__form-rating">{totalRating}/5</div>
      <div className="reply__form-skills">
        {ratingCategories.map(category => (
          <label className="reply__form-label" key={category.key}>
            <RangeInput
              className="reply__form-range-input"
              name={category.key}
              min={1}
              max={5}
              value={rating[category.key]}
              onChange={handleInputChange}
            />
            {category.label}
          </label>
        ))}
      </div>

      <textarea
        className="reply__form-textarea"
        placeholder="What could we improve?"
        value={text}
        onChange={handleTextareaChange}
      />

      <Button type="submit" className="reply__form-button">
        Send
      </Button>
    </form>
  );
};

export default Form;
