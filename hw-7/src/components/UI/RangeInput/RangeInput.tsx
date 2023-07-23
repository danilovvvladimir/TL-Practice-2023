// ==> Libs imports <===
import { FC, InputHTMLAttributes } from "react";

// ==> Components imports <===

// ==> Other imports <===
import "./RangeInput.css";

interface CustomRangeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  step?: number;
  value: number;
}

const CustomRangeInput: FC<CustomRangeInputProps> = ({ min, max, step = 1, ...props }) => {
  return (
    <div className="range-input-container">
      <div className="filled-track" style={{ width: `${((props.value - min) / (max - min)) * 100}%` }} />
      <div className="unfilled-track" style={{ width: `${100 - ((props.value - min) / (max - min)) * 100}%` }} />
      <input
        className="range-input"
        type="range"
        name={props.name}
        min={min}
        max={max}
        step={step}
        value={props.value}
        onChange={props.onChange}
      />
      <div className="progress-dots-container">
        {Array.from({ length: (max - min) / step + 1 }, (_, index) => (
          <div key={index} className={`progress-dot ${index + 1 * step <= props.value ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomRangeInput;
