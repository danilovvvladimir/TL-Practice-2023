import { FC } from "react";
import "./DictionaryPage.scss";
import { Button, Container } from "@mui/material";
import Title from "../../components/Title/Title";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useWordsStore } from "../../store/state";
import WordsTable from "../../components/WordsTable/WordsTable";

const DictionaryPage: FC = () => {
  const dictionaryPairs = useWordsStore(state => state.words);
  const navigate = useNavigate();

  return (
    <section className="dictionary-page">
      <Container>
        <Title titleMessage="Словарь" returnButtonPath="/" />

        <div className="dictionary-page__content">
          <Button startIcon={<AddIcon />} variant="contained" onClick={() => navigate("/dictionary/add-word")}>
            Добавить слово
          </Button>
          {dictionaryPairs.length > 0 && <WordsTable rows={dictionaryPairs} />}
        </div>
      </Container>
    </section>
  );
};

export default DictionaryPage;
