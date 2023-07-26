import { FC, FormEvent, ChangeEvent, useState, useContext } from "react";
import RangeInput from "../UI/RangeInput/RangeInput";
import Button from "../UI/Button/Button";
import { RatingRecord } from "../../types/form";
import { ratingCategories } from "../../constants/ratingCategories";
import { ReviewsContext } from "../../context/context";
import { calculateTotalRating } from "../../utils/calculateTotalRating";
import { getInitialRatingState } from "../../utils/getInitialRatingState";
import "./Form.css";

const Form: FC = () => {
  const { addReview } = useContext(ReviewsContext);

  const [rating, setRating] = useState<RatingRecord>(getInitialRatingState());
  const [text, setText] = useState("");

  const totalRating = calculateTotalRating(rating);

  const updateRating = (category: keyof RatingRecord, value: number) => {
    setRating(prevRating => ({ ...prevRating, [category]: value }));
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name as keyof RatingRecord;
    const value = parseInt(event.target.value, 10);

    updateRating(category, value);
  };

  const resetForm = () => {
    setRating(getInitialRatingState());
    setText("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addReview({ text, rating: totalRating });

    resetForm();
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
