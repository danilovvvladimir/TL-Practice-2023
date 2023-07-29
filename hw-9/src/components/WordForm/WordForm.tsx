import { FC, useEffect, useState } from "react";
import "./WordForm.scss";
import { Paper, Divider, TextField, FormControl, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DictionaryPair } from "../../types/words";
import "./WordForm.scss";

interface WordFormProps {
  handleSaving: (russianWord: string, englishWord: string) => void;
  defaultValues?: DictionaryPair;
}

const WordForm: FC<WordFormProps> = ({ handleSaving, defaultValues }) => {
  const navigate = useNavigate();

  const [russianWord, setRussianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");

  const resetForm = () => {
    setEnglishWord("");
    setRussianWord("");
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
                  id="russian-word"
                  variant="outlined"
                  value={russianWord}
                  onChange={e => setRussianWord(e.target.value)}
                />
              </div>
            </FormControl>
            <FormControl>
              <div className="word-form__content-input">
                <label className="word-form__content-label" htmlFor="english-word">
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
        </div>
      </Paper>
      <div className="word-form__buttons">
        <Button variant="contained" onClick={onSubmit}>
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
