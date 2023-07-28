import { FC } from "react";
import "./DictionaryPage.scss";
import { Container } from "@mui/material";
import Title from "../../components/Title/Title";

const DictionaryPage: FC = () => {
  return (
    <section className="dictionary-page">
      <Container>
        <Title titleMessage="Словарь" returnButtonPath="/" />
      </Container>
    </section>
  );
};

export default DictionaryPage;
