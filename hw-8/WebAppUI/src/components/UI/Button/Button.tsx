import { FC, ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const finalClassName = className ? `button ${className}` : "button";

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
