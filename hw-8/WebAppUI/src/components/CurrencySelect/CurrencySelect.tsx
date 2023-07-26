import { FC, ChangeEvent } from "react";
import "./CurrencySelect.css";
import { CurrencyWithAmount } from "../../types/currency";

interface CurrencySelectProps {
  purchasedCurrencyValue: CurrencyWithAmount;
  options: string[];
  onPurchasedCurrencyChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ options, onPurchasedCurrencyChange, purchasedCurrencyValue }) => {
  return (
    <div className="currency-select">
      <input
        type="number"
        className="currency-select__input"
        value={purchasedCurrencyValue.amount}
        onChange={e => onPurchasedCurrencyChange(e)}
      />
      <div className="currency-select__area">
        <div className="currency-select__divider"></div>
        <select
          className="currency-select__select"
          value={purchasedCurrencyValue.code}
          onChange={e => onPurchasedCurrencyChange(e)}
        >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="currency-select__name" aria-hidden="true">
          {purchasedCurrencyValue.code}
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
