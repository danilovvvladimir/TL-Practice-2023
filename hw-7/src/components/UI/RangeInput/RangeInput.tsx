// ==> Libs imports <===
import { ChangeEvent, FC } from "react";

// ==> Components imports <===

// ==> Other imports <===
import "./RangeInput.css";

interface CustomRangeInputProps {
  min: number;
  max: number;
  className: string;
  step?: number;
  value: number;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomRangeInput: FC<CustomRangeInputProps> = ({ min, max, className, name, value, onChange, step = 1 }) => {
  const filledTrackWidth = ((value - min) / (max - min)) * 100;
  const unfilledTrackWidth = 100 - ((value - min) / (max - min)) * 100;

  const finalClassName = className ? `range-input ${className}` : "range-input";

  return (
    <div className="range-input-container">
      <div className="filled-track" style={{ width: `${filledTrackWidth}%` }} />
      <div className="unfilled-track" style={{ width: `${unfilledTrackWidth}%` }} />
      <input
        className={finalClassName}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <div className="progress-dots-container">
        {Array.from({ length: (max - min) / step + 1 }, (_, index) => (
          <div key={index} className={`progress-dot ${index + 1 * step <= value ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomRangeInput;
