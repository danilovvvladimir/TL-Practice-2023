import { FC, useState, useEffect } from "react";
import { useWordsStore } from "../../store/dictionary";
import { Button, FormControl, Paper, Select, MenuItem } from "@mui/material";
import { getRandomDictionaryPair } from "../../utils/getRandomDictionaryPair";
import { DictionaryPair } from "../../types/dictionary";
import { getRandomArrayIndex } from "../../utils/getRandomArrayIndex";
import { QuizGameHint } from "../../types/quiz";
import { shuffleArray } from "../../utils/shuffleArray";
import { capitalizeWord } from "../../utils/capitalizeWord";
import { useQuizStore } from "../../store/quiz";
import { useNavigate } from "react-router-dom";
import "./QuizGame.scss";

const QuizGame: FC = () => {
  const navigate = useNavigate();

  const { words } = useWordsStore();
  const { userAnswers, setUserAnswers } = useQuizStore();

  const [round, setRound] = useState(1);
  const [leftWords, setLeftWords] = useState<DictionaryPair[]>(words);
  const [currentQuizPair, setCurrentQuizPair] = useState<DictionaryPair>({ russianWord: "", englishWord: "", id: "" });
  const [randomAnswers, setRandomAnswers] = useState<string[]>([]);

  const [userChoice, setUserChoice] = useState("none");
  const [verificationMessage, setVerificationMessage] = useState<QuizGameHint | null>(null);
  const [isChangesDisabled, setIsChangesDisabled] = useState<boolean>(false);

  const handleCheck = () => {
    if (userChoice === currentQuizPair.englishWord) {
      setUserAnswers({ ...userAnswers, correct: userAnswers.correct + 1 });
      setVerificationMessage({
        isCorrect: true,
        message: `Правильно! ${currentQuizPair.russianWord} - ${currentQuizPair.englishWord}`,
      });
    } else {
      setUserAnswers({ ...userAnswers, incorrect: userAnswers.incorrect + 1 });
      setVerificationMessage({
        isCorrect: false,
        message: `Неправильно! ${currentQuizPair.russianWord} - ${currentQuizPair.englishWord}, а не ${userChoice}`,
      });
    }

    setIsChangesDisabled(true);
  };

  const handleNewRound = () => {
    setRound(round => round + 1);

    if (round < words.length) {
      handleCreatingNewWord();
      setVerificationMessage(null);
    }

    setIsChangesDisabled(false);
  };

  const handleCreatingNewWord = () => {
    const newWord = leftWords[getRandomArrayIndex(leftWords)];

    setCurrentQuizPair(newWord);
    setLeftWords(leftWords.filter(word => word.id !== newWord.id));
    setRandomAnswers(shuffleArray([newWord.englishWord, ...getRandomDictionaryPair(words, newWord.englishWord, 3)]));
    setUserChoice("none");
  };

  useEffect(() => {
    setUserAnswers({ correct: 0, incorrect: 0 });
    handleCreatingNewWord();
  }, []);

  const handleRedirectToResult = () => {
    handleCheck();
    navigate("/quiz/result");
  };

  return (
    <div className="quiz-game">
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
                disabled={isChangesDisabled}
                value={userChoice}
                onChange={event => setUserChoice(event.target.value)}
                sx={{ width: "235px" }}
              >
                <MenuItem value="none" disabled>
                  Не выбрано
                </MenuItem>
                {randomAnswers.map(randomAnswer => (
                  <MenuItem key={randomAnswer} value={randomAnswer}>
                    {capitalizeWord(randomAnswer)}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </FormControl>
        </div>

        {verificationMessage && (
          <div
            className={
              verificationMessage.isCorrect
                ? "quiz-game__hint quiz-game__hint--correct"
                : "quiz-game__hint quiz-game__hint--incorrect"
            }
          >
            {verificationMessage.message}
          </div>
        )}
      </Paper>
      <div className="quiz-game__buttons">
        {round !== words.length ? (
          <Button disabled={isChangesDisabled || userChoice === "none"} variant="contained" onClick={handleCheck}>
            Проверить
          </Button>
        ) : (
          <Button disabled={userChoice === "none"} variant="contained" onClick={handleRedirectToResult}>
            Завершить
          </Button>
        )}

        {verificationMessage && round !== words.length && (
          <Button variant="inverted" onClick={handleNewRound}>
            Дальше
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
