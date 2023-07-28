import { FC } from "react";
import "./HomePage.scss";
import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="home-page">
      <Container>
        <Title titleMessage="Выберите режим" />
        <div className="home-page__links">
          <Button variant="contained" onClick={() => navigate("/dictionary")}>
            Заполнить словарь
          </Button>

          <Button variant="inverted" onClick={() => navigate("/quiz")}>
            проверить знания
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
