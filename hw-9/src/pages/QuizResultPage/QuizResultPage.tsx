import { FC } from "react";
import { QuizGameInfo } from "../../types/quiz";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { Paper, Divider } from "@mui/material";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./QuizResultPage.scss";
import Title from "../../components/Title/Title";

interface QuizGameFinalProps {
  userAnswers: QuizGameInfo;
}

const QuizResultPage: FC<QuizGameFinalProps> = ({ userAnswers }) => {
  const navigate = useNavigate();

  return (
    // Корректно: {userAnswers.correct} Некорректно: {userAnswers.incorrect} Всего:{" "}
    <div className="quiz-game__final">
      <Title titleMessage="Результат проверки знаний" />

      <Paper sx={{ padding: "16px", borderRadius: "8px", width: "292px", mb: "24px" }}>
        <div className="quiz-game__final-header">Ответы</div>
        <div className="quiz-game__final-block">
          <div className="quiz-game__final-block-label">
            <TaskAltOutlinedIcon sx={{ color: `#50AC58` }} />
            <span>Правильные</span>
          </div>
          <span className="quiz-game__final-block-result">{userAnswers.correct}</span>
        </div>
        <Divider />
        <div className="quiz-game__final-block">
          <div className="quiz-game__final-block-label">
            <HighlightOffIcon sx={{ color: `#D00000` }} />
            <span>Ошибочные</span>
          </div>
          <span className="quiz-game__final-block-result">{userAnswers.incorrect}</span>
        </div>
        <Divider />
        <div className="quiz-game__final-block">
          <div className="quiz-game__final-block-label">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.3333 1.33333C15.24 1.33333 13.2533 2.31999 12 3.99999C10.7466 2.31999 8.75998 1.33333 6.66665 1.33333H1.33331V18.6667H6.66665C8.77331 18.5733 10.5733 20.2 10.6666 22.3067C10.6666 22.4267 10.6666 22.5467 10.6666 22.6667H13.3333C13.24 20.56 14.8666 18.76 16.9733 18.6667C17.0933 18.6667 17.2133 18.6667 17.3333 18.6667H22.6666V1.33333H17.3333ZM10.6666 17.2267C9.49331 16.4133 8.09331 15.9733 6.66665 16H3.99998V3.99999H6.66665C8.87998 3.99999 10.6666 5.78666 10.6666 7.99999V17.2267ZM20 16H17.3333C15.9066 15.9733 14.5066 16.4133 13.3333 17.2267V7.99999C13.3333 5.78666 15.12 3.99999 17.3333 3.99999H20V16Z"
                fill="#9932AB"
              />
            </svg>

            <span>Всего слов</span>
          </div>
          <span className="quiz-game__final-block-result">{userAnswers.correct + userAnswers.incorrect}</span>
        </div>
        <Divider />
      </Paper>
      <div className="quiz-game__final-buttons">
        <Button variant="contained" onClick={() => navigate("/quiz")}>
          Проверить знания еще раз
        </Button>
        <Button variant="inverted" onClick={() => navigate("/")}>
          Вернуться в начало
        </Button>
      </div>
    </div>
  );
};

export default QuizResultPage;
