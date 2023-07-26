// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./CurrencySelect.css";

const CurrencySelect: FC = () => {
  return (
    <div className="currency-select">
      <input type="number" className="currency-select__input" />
      <div className="currency-select__area">
        <select className="currency-select__select">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <span aria-hidden="true">Российский рубль</span>
      </div>
    </div>
  );
};

export default CurrencySelect;
