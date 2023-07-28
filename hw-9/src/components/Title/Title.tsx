import { FC } from "react";
import "./Title.scss";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface TitleProps {
  titleMessage: string;
  titleBoxClassName?: string;
  returnButtonPath?: string;
}

const Title: FC<TitleProps> = ({ returnButtonPath, titleMessage, titleBoxClassName }) => {
  const finalClassName = titleBoxClassName ? `title-box ${titleBoxClassName}` : "title-box";

  return (
    <div className={finalClassName}>
      {returnButtonPath ? (
        <>
          <Link to={returnButtonPath} className="button button--inverted title-box__button">
            <ChevronLeftIcon />
          </Link>
          <h1 className="title">{titleMessage}</h1>
        </>
      ) : (
        <h1 className="title">{titleMessage}</h1>
      )}
    </div>
  );
};

export default Title;
