import { FC, useState } from "react";
import "./QuizGame.scss";
import { useWordsStore } from "../../store/state";
import { Button, FormControl, Paper, TextField } from "@mui/material";

const QuizGame: FC = () => {
  const [russianWord, setRussianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const { words } = useWordsStore();
  const [round, setRound] = useState(1);

  return (
    <div className="quiz-game">
      <div className="quiz-game__round">
        Слово: {round} из {words.length - 1}
      </div>
      <Paper sx={{ marginBottom: "24px", padding: "32px 24px" }}>
        <div className="quiz-game__content-inputs">
          <FormControl>
            <div className="quiz-game__content-input">
              <label className="quiz-game__content-label" htmlFor="russian-word">
                Слово на русском языке
              </label>
              <TextField
                id="russian-word"
                variant="outlined"
                value={russianWord}
                onChange={e => setRussianWord(e.target.value)}
              />
            </div>
          </FormControl>
          <FormControl>
            <div className="quiz-game__content-input">
              <label className="quiz-game__content-label" htmlFor="english-word">
                Перевод на английский язык
              </label>
              <TextField
                id="english-word"
                variant="outlined"
                value={englishWord}
                onChange={e => setEnglishWord(e.target.value)}
              />
            </div>
          </FormControl>
        </div>
      </Paper>
      <Button variant="contained">Проверить</Button>
    </div>
  );
};

export default QuizGame;
