import { FC } from "react";
import "./Title.scss";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";

interface TitleProps {
  titleMessage: string;
  titleBoxClassName?: string;
  returnButtonPath?: string;
}

const Title: FC<TitleProps> = ({ returnButtonPath, titleMessage, titleBoxClassName }) => {
  const navigate = useNavigate();
  const finalClassName = titleBoxClassName ? `title-box ${titleBoxClassName}` : "title-box";

  return (
    <div className={finalClassName}>
      {returnButtonPath ? (
        <>
          <Button variant="inverted" sx={{ width: "36px", height: "36px" }} onClick={() => navigate(returnButtonPath)}>
            <ChevronLeftIcon />
          </Button>
          <h1 className="title">{titleMessage}</h1>
        </>
      ) : (
        <h1 className="title">{titleMessage}</h1>
      )}
    </div>
  );
};

export default Title;
