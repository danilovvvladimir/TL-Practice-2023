import { FC } from "react";
import "./Error.css";

interface ErrorProps {
  children: React.ReactNode;
}

const Error: FC<ErrorProps> = ({ children }) => {
  return (
    <div className="error">
      <div className="error__message">{children}</div>
    </div>
  );
};

export default Error;
