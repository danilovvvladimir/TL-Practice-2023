import { FC } from "react";
import { Container } from "@mui/material";
import Title from "../../components/Title/Title";
import { useWordsStore } from "../../store/dictionary";
import WordForm from "../../components/WordForm/WordForm";

const AddWordPage: FC = () => {
  const { words, addDictionaryPair } = useWordsStore();

  const handleSaving = (russianWord: string, englishWord: string) => {
    if (!russianWord || !englishWord) {
      return;
    }

    if (words.find(word => word.russianWord == russianWord && word.englishWord == englishWord)) {
      alert("У вас уже есть такая пара в словаре");
      return;
    }

    addDictionaryPair({ englishWord, russianWord });
  };

  return (
    <section className="add-word-page">
      <Container>
        <Title titleMessage="Добавление слова" returnButtonPath="/dictionary" />
        <WordForm handleSaving={handleSaving} />
      </Container>
    </section>
  );
};

export default AddWordPage;
