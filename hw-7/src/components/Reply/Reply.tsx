import { FC } from "react";
import Form from "../Form/Form";
import ReviewList from "../ReviewList/ReviewList";
import "./Reply.css";

const Reply: FC = () => {
  return (
    <section className="reply">
      <div className="container">
        <div className="reply__wrapper">
          <h1 className="title reply__title">How nice was my reply?</h1>
          <Form />
          <ReviewList />
        </div>
      </div>
    </section>
  );
};

export default Reply;
