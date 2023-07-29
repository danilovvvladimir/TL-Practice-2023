import { FC } from "react";
import "./EditWordPage.scss";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { useWordsStore } from "../../store/state";
import { Container } from "@mui/material";
import WordForm from "../../components/WordForm/WordForm";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const EditWordPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { words, updateDictionaryPair } = useWordsStore();

  const neededDictionaryPair = words.find(word => word.id === id);

  if (!neededDictionaryPair || !id) {
    return <NotFoundPage />;
  }

  const handleSaving = (russianWord: string, englishWord: string) => {
    console.log(russianWord, englishWord);

    if (!russianWord || !englishWord) {
      return;
    }

    updateDictionaryPair(id, { russianWord, englishWord });
  };

  return (
    <section className="edit-word-page">
      <Container>
        <Title titleMessage="Редактирование слова" returnButtonPath="/dictionary" />
        <WordForm handleSaving={handleSaving} defaultValues={neededDictionaryPair} />
      </Container>
    </section>
  );
};

export default EditWordPage;
