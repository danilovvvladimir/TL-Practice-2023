import { FC } from "react";
import "./DictionaryPage.scss";
import { Button, Container } from "@mui/material";
import Title from "../../components/Title/Title";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useWordsStore } from "../../store/state";

const DictionaryPage: FC = () => {
  const dictionaryPairs = useWordsStore(state => state.words);
  const navigate = useNavigate();

  return (
    <section className="dictionary-page">
      <Container>
        <Title titleMessage="Словарь" returnButtonPath="/" />
        <div className="dictionary-page__content">
          {dictionaryPairs.length > 0 ? (
            dictionaryPairs.map(dp => (
              <div key={dp.id}>
                {dp.russianWord} - {dp.englishWord}{" "}
              </div>
            ))
          ) : (
            <Button startIcon={<AddIcon />} variant="contained" onClick={() => navigate("/dictionary/add-word")}>
              Добавить слово
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default DictionaryPage;
