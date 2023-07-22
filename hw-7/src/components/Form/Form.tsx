// ==> Libs imports <===
import { FC, FormEvent, ChangeEvent } from "react";

// ==> Components imports <===
import RangeInput from "../UI/RangeInput/RangeInput";
import Button from "../UI/Button/Button";

// ==> Other imports <===
import "./Form.css";
import { Rating } from "../../types/formTypes";
import { ratingCategories } from "../../constants/ratingCategories";

interface FormProps {
  updateRating: (category: keyof Rating, value: number) => void;
  rating: Rating;
}

const Form: FC<FormProps> = ({ updateRating, rating }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name as keyof Rating;
    const value = parseInt(event.target.value, 10);

    updateRating(category, value);
  };

  return (
    <form className="reply__form" onSubmit={handleSubmit}>
      <div className="reply__form-skills">
        {ratingCategories.map(category => (
          <label className="reply__form-label" key={category.key}>
            <RangeInput
              className="reply__form-range-input"
              name={category.key}
              min={0}
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
