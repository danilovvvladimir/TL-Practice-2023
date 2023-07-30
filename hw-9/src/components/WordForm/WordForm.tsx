import { ChangeEvent, FC, useEffect, useState } from "react";
import "./WordForm.scss";
import { Paper, Divider, TextField, FormControl, Button, FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DictionaryPair } from "../../types/dictionary";
import "./WordForm.scss";
import { ENGLISH_REGEX, RUSSIAN_REGEX } from "../../constants/regex";

interface WordFormProps {
  handleSaving: (russianWord: string, englishWord: string) => void;
  defaultValues?: DictionaryPair;
}

interface Error {
  russian: {
    error: boolean;
    message?: string;
  };
  english: {
    error: boolean;
    message?: string;
  };
}

const WordForm: FC<WordFormProps> = ({ handleSaving, defaultValues }) => {
  const navigate = useNavigate();

  const [russianWord, setRussianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const [error, setError] = useState<Error>({
    english: {
      error: defaultValues?.englishWord ? false : true,
      message: defaultValues?.englishWord ? "" : "Слово должно быть написано на английском языке!",
    },
    russian: {
      error: defaultValues?.russianWord ? false : true,
      message: defaultValues?.russianWord ? "" : "Слово должно быть написано на русском языке!",
    },
  });

  const resetForm = () => {
    setEnglishWord("");
    setRussianWord("");
  };

  const handleRussianWordChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (!RUSSIAN_REGEX.test(value)) {
      setError({ ...error, russian: { error: true, message: "Слово должно быть написано на русском языке!" } });
    } else {
      setError({ ...error, russian: { error: false, message: "" } });
    }

    setRussianWord(e.target.value);
  };

  const handleEnglishWordChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (!ENGLISH_REGEX.test(value)) {
      setError({ ...error, english: { error: true, message: "Слово должно быть написано на английском языке!" } });
    } else {
      setError({ ...error, english: { error: false, message: "" } });
    }

    setEnglishWord(e.target.value);
  };

  const onSubmit = () => {
    handleSaving(russianWord, englishWord);
    resetForm();
  };

  useEffect(() => {
    if (defaultValues) {
      setRussianWord(defaultValues.russianWord);
      setEnglishWord(defaultValues.englishWord);
    }
  }, []);

  return (
    <>
      <Paper sx={{ marginBottom: "24px" }}>
        <div className="word-form__content">
          <div className="word-form__content-title">Словарное слово</div>
          <Divider />
          <div className="word-form__content-inputs">
            <FormControl>
              <div className="word-form__content-input">
                <label className="word-form__content-label" htmlFor="russian-word">
                  Слово на русском языке
                </label>
                <TextField
                  error={error.russian.error}
                  id="russian-word"
                  variant="outlined"
                  value={russianWord}
                  onChange={e => handleRussianWordChange(e)}
                />
                <FormHelperText error={error.russian.error}>{error.russian.message}</FormHelperText>
              </div>
            </FormControl>
            <FormControl>
              <div className="word-form__content-input">
                <label className="word-form__content-label" htmlFor="english-word">
                  Перевод на английский язык
                </label>
                <TextField
                  error={error.english.error}
                  id="english-word"
                  variant="outlined"
                  value={englishWord}
                  onChange={e => handleEnglishWordChange(e)}
                />
                <FormHelperText error={error.english.error}>{error.english.message}</FormHelperText>
              </div>
            </FormControl>
          </div>
        </div>
      </Paper>
      <div className="word-form__buttons">
        <Button variant="contained" onClick={onSubmit} disabled={error.english.error || error.russian.error}>
          Сохранить
        </Button>
        <Button variant="inverted" onClick={() => navigate("/dictionary")}>
          Отменить
        </Button>
      </div>
    </>
  );
};

export default WordForm;
