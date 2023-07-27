import { FC } from "react";
import "./Loader.css";
import spinnerIMG from "../../assets/spinner.svg";

interface LoaderProps {
  children: React.ReactNode;
}

const Loader: FC<LoaderProps> = ({ children }) => {
  return (
    <div className="loader">
      <h1 className="loader__message">{children}</h1>
      <img src={spinnerIMG} alt="loading spinner" className="loader__spinner" />
    </div>
  );
};

export default Loader;
