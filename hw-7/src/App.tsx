// ==> Libs imports <===
import { FC } from "react";

// ==> Components imports <===
import Form from "./components/Form/Form";

// ==> Other imports <===

const App: FC = () => {
  return (
    <section className="reply">
      <div className="container">
        <div className="reply__wrapper">
          <h1 className="title reply__title">How nice was my reply?</h1>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default App;

