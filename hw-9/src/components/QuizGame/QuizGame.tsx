import { FC, useState, useEffect } from "react";
import "./QuizGame.scss";
import { useWordsStore } from "../../store/state";
import { Button, FormControl, Paper, Select, MenuItem } from "@mui/material";
import { getRandomElements } from "../../utils/getRandomElements";
import { DictionaryPair } from "../../types/words";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { QuizGameHint, QuizGameInfo } from "../../types/quiz";
import { shuffleArray } from "../../utils/shuffleArray";
import { capitalizeWord } from "../../utils/capitalizeWord";
import QuizResultPage from "../../pages/QuizResultPage/QuizResultPage";
import Title from "../Title/Title";

const QuizGame: FC = () => {
  const { words } = useWordsStore();

  const [round, setRound] = useState(1);
  const [leftWords, setLeftWords] = useState<DictionaryPair[]>(words);
  const [currentQuizPair, setCurrentQuizPair] = useState<DictionaryPair>({ russianWord: "", englishWord: "", id: "" });
  const [randomAnswers, setRandomAnswers] = useState<string[]>([]);

  const [userChoice, setUserChoice] = useState("none");
  const [userAnswers, setUserAnswers] = useState<QuizGameInfo>({ correct: 0, incorrect: 0 });
  const [hintMessage, setHintMessage] = useState<QuizGameHint | null>(null);
  const [isNextRoundDisabled, setIsNextRoundDisabled] = useState<boolean>(false);

  const handleCheck = () => {
    setRound(round => round + 1);

    if (userChoice === currentQuizPair.englishWord) {
      setUserAnswers({ ...userAnswers, correct: userAnswers.correct + 1 });
      setHintMessage({
        isCorrect: true,
        message: `Правильно! ${currentQuizPair.russianWord} - ${currentQuizPair.englishWord}`,
      });
    } else {
      setUserAnswers({ ...userAnswers, incorrect: userAnswers.incorrect + 1 });
      setHintMessage({
        isCorrect: false,
        message: `Неправильно! ${currentQuizPair.russianWord} - ${currentQuizPair.englishWord}, а не ${userChoice}`,
      });
    }

    if (round < words.length - 1) {
      setIsNextRoundDisabled(true);
    }
  };

  const handleNewRound = () => {
    if (round < words.length) {
      handleCreatingNewWord();
      setHintMessage(null);
    }
    setIsNextRoundDisabled(false);
  };

  const handleCreatingNewWord = () => {
    const newWord = leftWords[getRandomIndex(leftWords)];

    setCurrentQuizPair(newWord);
    setLeftWords(leftWords.filter(word => word.id !== newWord.id));
    setRandomAnswers(shuffleArray([newWord.englishWord, ...getRandomElements(words, newWord.englishWord, 3)]));
    setUserChoice("none");
  };

  useEffect(() => {
    handleCreatingNewWord();
  }, []);

  if (round < words.length) {
    return <QuizResultPage userAnswers={userAnswers} />;
  }

  return (
    <div className="quiz-game">
      <Title titleMessage="Проверка знаний" returnButtonPath="/" />
      <div className="quiz-game__info">
        Слово: {round} из {words.length}
      </div>

      <Paper sx={{ marginBottom: "24px", padding: "32px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="quiz-game__content">
          <div className="quiz-game__content-field">
            <div className="quiz-game__content-label">Слово на русском языке</div>
            <div className="quiz-game__content-riddle">{capitalizeWord(currentQuizPair.russianWord)}</div>
          </div>
          <FormControl>
            <div className="quiz-game__content-field">
              <label className="quiz-game__content-label" htmlFor="english-word">
                Перевод на английский язык
              </label>
              <Select
                disabled={isNextRoundDisabled}
                value={userChoice}
                onChange={event => setUserChoice(event.target.value)}
                sx={{ width: "235px" }}
              >
                <MenuItem value="none" disabled>
                  Не выбрано
                </MenuItem>
                {randomAnswers.map(randomAnswer => (
                  <MenuItem key={randomAnswer} value={randomAnswer}>
                    {randomAnswer}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </FormControl>
        </div>

        {hintMessage && (
          <div
            className={
              hintMessage.isCorrect
                ? "quiz-game__hint quiz-game__hint--correct"
                : "quiz-game__hint quiz-game__hint--incorrect"
            }
          >
            {hintMessage.message}
          </div>
        )}
      </Paper>
      <div className="quiz-game__buttons">
        <Button disabled={isNextRoundDisabled} variant="contained" onClick={handleCheck}>
          {round !== words.length ? "Проверить" : "Завершить"}
        </Button>
        {hintMessage && round !== words.length && (
          <Button variant="inverted" onClick={handleNewRound}>
            Дальше
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
