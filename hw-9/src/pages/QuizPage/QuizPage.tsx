import { FC } from "react";
import { Container } from "@mui/material";
import "./QuizPage.scss";
import Title from "../../components/Title/Title";

const QuizPage: FC = () => {
  return (
    <section className="quiz-page">
      <Container>
        <Title titleMessage="Проверка знаний" returnButtonPath="/" />
      </Container>
    </section>
  );
};

export default QuizPage;
