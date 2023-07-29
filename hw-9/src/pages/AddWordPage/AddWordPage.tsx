import { FC, useState } from "react";
import "./AddWordPage.scss";
import { Container, Paper, Divider, TextField, FormControl, Button } from "@mui/material";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import { useWordsStore } from "../../store/state";

const AddWordPage: FC = () => {
  const [russianWord, setRussianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");

  const { words, addDictionaryPair } = useWordsStore();

  const navigate = useNavigate();

  const handleSaving = () => {
    if (!russianWord || !englishWord) {
      return;
    }

    if (words.filter(word => word.russianWord == russianWord && word.englishWord == englishWord)) {
      alert("У вас уже есть такая пара в словаре");
      return;
    }
    addDictionaryPair({ englishWord, russianWord });

    resetForm();
  };

  const resetForm = () => {
    setEnglishWord("");
    setRussianWord("");
  };

  return (
    <section className="add-word-page">
      <Container>
        <Title titleMessage="Добавление слова" returnButtonPath="/dictionary" />
        <Paper sx={{ marginBottom: "24px" }}>
          <div className="add-word-page__content">
            <div className="add-word-page__content-title">Словарное слово</div>
            <Divider />
            <div className="add-word-page__content-inputs">
              <FormControl>
                <div className="add-word-page__content-input">
                  <label className="add-word-page__content-label" htmlFor="russian-word">
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
                <div className="add-word-page__content-input">
                  <label className="add-word-page__content-label" htmlFor="english-word">
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
        <div className="add-word-page__buttons">
          <Button variant="contained" onClick={handleSaving}>
            Сохранить
          </Button>
          <Button variant="inverted" onClick={() => navigate("/dictionary")}>
            Отменить
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AddWordPage;
