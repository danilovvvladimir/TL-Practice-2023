import { FC } from "react";
import "./EditWordPage.scss";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { useWordsStore } from "../../store/state";

const EditWordPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { words } = useWordsStore();

  const neededDictionaryPair = words.find(word => word.id === id);

  if (!neededDictionaryPair) {
    // to 404notfound
    return <div>not found</div>;
  }
  return (
    <section className="edit-word-page">
      <Title titleMessage="Редактирование слова" returnButtonPath="/dictionary" />
      {neededDictionaryPair.russianWord} - {neededDictionaryPair.englishWord}
    </section>
  );
};

export default EditWordPage;
