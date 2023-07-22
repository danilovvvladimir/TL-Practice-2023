// ==> Libs imports <===
import { FC, InputHTMLAttributes } from "react";

// ==> Components imports <===

// ==> Other imports <===
import "./RangeInput.css";

interface RangeInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const RangeInput: FC<RangeInputProps> = ({ className, ...props }) => {
  const finalClassName = className ? `range-input ${className}` : "range-input";

  return <input className={finalClassName} type="range" {...props} />;
};

export default RangeInput;
