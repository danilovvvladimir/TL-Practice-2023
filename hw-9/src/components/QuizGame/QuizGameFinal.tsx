import { FC } from "react";
import { QuizGameInfo } from "../../types/quiz";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface QuizGameFinalProps {
  userAnswers: QuizGameInfo;
}

const QuizGameFinal: FC<QuizGameFinalProps> = ({ userAnswers }) => {
  const navigate = useNavigate();

  return (
    <div>
      Корректно: {userAnswers.correct} Некорректно: {userAnswers.incorrect} Всего:{" "}
      {userAnswers.correct + userAnswers.incorrect}
      <div className="quiz-game__final">
        <div className="quiz-game__final-buttons">
          <Button variant="contained" onClick={() => navigate("/quiz-game")}>
            Проверить знания еще раз
          </Button>
          <Button variant="inverted" onClick={() => navigate("/")}>
            Вернуться в начало
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizGameFinal;
