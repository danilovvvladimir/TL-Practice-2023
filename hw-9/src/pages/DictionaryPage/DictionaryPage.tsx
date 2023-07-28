import { FC, useContext } from "react";
import "./DictionaryPage.scss";
import { Button, Container } from "@mui/material";
import Title from "../../components/Title/Title";
import { DictionaryContext } from "../../context/context";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const DictionaryPage: FC = () => {
  const { dictionaryPairs, addDictionaryPair, editDictionaryPair } = useContext(DictionaryContext);
  const navigate = useNavigate();

  return (
    <section className="dictionary-page">
      <Container>
        <Title titleMessage="Словарь" returnButtonPath="/" />
        <div className="dictionary-page__content">
          {dictionaryPairs.length > 0 ? (
            "ye"
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
