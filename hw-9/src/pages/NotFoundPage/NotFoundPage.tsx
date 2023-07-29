import { FC } from "react";
import "./NotFoundPage.scss";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import notFoundIMG from "../../assets/images/not-found.svg";
import { useNavigate } from "react-router-dom";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="not-found-page">
      <Container>
        <div className="not-found-page__wrapper">
          <div className="not-found-page__text">
            <h1 className="title not-found-page__title">Произошла ошибка. Такой страницы не существует.</h1>
          </div>
          <img src={notFoundIMG} alt="Страница не найдена" className="not-found-page__image" />
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ lineHeight: "20px" }}
            variant="contained"
            onClick={() => navigate("/")}
          >
            Вернуться на главную
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundPage;
