import { FC, useState, useEffect, useRef } from "react";
import "./QuizGame.scss";
import { useWordsStore } from "../../store/state";
import { Button, FormControl, Paper, Select, TextField, MenuItem } from "@mui/material";
import { getRandomElements } from "../../utils/getRandomElements";
import QuizGameFinal from "./QuizGameFinal";
import { DictionaryPair } from "../../types/words";
import { getRandomIndex } from "../../utils/getRandomIndex";

const QuizGame: FC = () => {
  const { words } = useWordsStore();

  const [userAnswer, setUserAnswer] = useState("ssss");

  const [round, setRound] = useState(1);
  console.log("ROUND: ", round);

  const [leftWords, setLeftWords] = useState<DictionaryPair[]>(words);
  console.log("Слова которые осталось угадать: ", leftWords);

  const [currentQuizPair, setCurrentQuizPair] = useState<DictionaryPair>({ englishWord: "", id: "", russianWord: "" });
  console.log("Текущая пара слова вопрос ответ", currentQuizPair);

  const [randomAnswers, setRandomAnswers] = useState<string[]>([]);
  console.log("Случайные ответы для селекта", randomAnswers);

  const handleCheck = () => {
    setRound(round => round + 1);
    handleCreatingNewWord();
  };

  const handleCreatingNewWord = () => {
    const newWord = leftWords[getRandomIndex(leftWords)];
    setCurrentQuizPair(newWord);
    setLeftWords(leftWords.filter(word => word.id !== newWord.id));
    setRandomAnswers([newWord.englishWord, ...getRandomElements(words, newWord.englishWord, 3)]);
  };

  useEffect(() => {
    handleCreatingNewWord();
  }, []);

  if (round > words.length) {
    return <QuizGameFinal />;
  }

  return (
    <div className="quiz-game">
      <div className="quiz-game__round">
        Слово: {round} из {words.length}
      </div>
      <Paper sx={{ marginBottom: "24px", padding: "32px 24px" }}>
        <div className="quiz-game__content-inputs">
          <FormControl>
            <div className="quiz-game__content-input">
              <label className="quiz-game__content-label" htmlFor="russian-word">
                Слово на русском языке
              </label>
              <TextField id="russian-word" variant="outlined" value={currentQuizPair.russianWord} />
            </div>
          </FormControl>
          <FormControl>
            <div className="quiz-game__content-input">
              <label className="quiz-game__content-label" htmlFor="english-word">
                Перевод на английский язык
              </label>

              <Select value={userAnswer} label="Secret question" onChange={event => setUserAnswer(event.target.value)}>
                {randomAnswers.map(randomAnswer => (
                  <MenuItem key={randomAnswer} value={randomAnswer}>
                    {randomAnswer}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </FormControl>
        </div>
      </Paper>
      <Button variant="contained" onClick={handleCheck}>
        Проверить
      </Button>
    </div>
  );
};

export default QuizGame;
