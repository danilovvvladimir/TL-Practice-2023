import { FC } from "react";
import "./AddWordPage.scss";
import { Container, Paper, Divider, TextField, FormControl, Button } from "@mui/material";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";

const AddWordPage: FC = () => {
  const navigate = useNavigate();
  const handleSaving = () => {
    console.log("adding to words");
    navigate("/dictionary");
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
                  <TextField id="russian-word" variant="outlined" />
                </div>
              </FormControl>
              <FormControl>
                <div className="add-word-page__content-input">
                  <label className="add-word-page__content-label" htmlFor="english-word">
                    Перевод на английский язык
                  </label>
                  <TextField id="english-word" variant="outlined" />
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
