import { FC } from "react";
import { Container } from "@mui/material";
import "./QuizPage.scss";
import { useWordsStore } from "../../store/dictionary";
import QuizGame from "../../components/QuizGame/QuizGame";
import Title from "../../components/Title/Title";

const QuizPage: FC = () => {
  const { words } = useWordsStore();

  return (
    <section className="quiz-page">
      <Container>
        <Title titleMessage="Проверка знаний" returnButtonPath="/" />
        {words.length >= 4 ? (
          <QuizGame />
        ) : (
          <div>Пройти проверку знаний можно только имея 4 и больше слов в словаре...</div>
        )}
      </Container>
    </section>
  );
};

export default QuizPage;
