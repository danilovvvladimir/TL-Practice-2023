import { FC, ChangeEvent } from "react";
import "./CurrencySelect.css";
import { CurrencyWithAmount } from "../../types/currency";

interface CurrencySelectProps {
  options: string[];
  value: CurrencyWithAmount;
  onChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ options, onChange, value }) => {
  return (
    <div className="currency-select">
      <input type="number" className="currency-select__input" value={value.amount} onChange={e => onChange(e)} />
      <div className="currency-select__area">
        <div className="currency-select__divider"></div>
        <select className="currency-select__select" value={value.code} onChange={e => onChange(e)}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="currency-select__name" aria-hidden="true">
          {value.code}
        </span>
        <div className="currency-select__angle">
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L11.1962 0H0.803848L6 6Z" fill="#757575" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CurrencySelect;
