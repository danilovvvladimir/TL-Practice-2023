import { FC } from "react";
import "./HomePage.scss";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";

const HomePage: FC = () => {
  return (
    <section className="home-page">
      <Container>
        <Title titleMessage="Выберите режим" />
        <div className="home-page__links">
          <Link to="/dictionary" className="button">
            Заполнить словарь
          </Link>
          <Link to="/quiz" className="button button--inverted">
            проверить знания
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
