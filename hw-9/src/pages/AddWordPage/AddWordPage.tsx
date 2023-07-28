import { FC } from "react";
import "./AddWordPage.scss";
import { Container } from "@mui/material";
import Title from "../../components/Title/Title";

const AddWordPage: FC = () => {
  return (
    <section className="add-word-page">
      <Container>
        <Title titleMessage="Добавление слова" returnButtonPath="/dictionary" />
      </Container>
    </section>
  );
};

export default AddWordPage;
