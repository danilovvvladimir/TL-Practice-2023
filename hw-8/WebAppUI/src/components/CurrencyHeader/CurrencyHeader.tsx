import { FC, useContext } from "react";
import "./CurrencyHeader.css";
import Button from "../UI/Button/Button";
import { CurrencyWithAmount } from "../../types/currency";
import { FilterContext } from "../../context/context";

interface CurrencyHeaderProps {
  purchasedCurrency: CurrencyWithAmount;
  paymentCurrency: CurrencyWithAmount;
}

const CurrencyHeader: FC<CurrencyHeaderProps> = ({ paymentCurrency, purchasedCurrency }) => {
  const { addFilter } = useContext(FilterContext);

  return (
    <div className="currency-exchange__header">
      <div className="currency-exchange__info">
        <div className="currency-exchange__purchased">
          {paymentCurrency.amount} {paymentCurrency.name} is
        </div>
        <div className="currency-exchange__payment">
          {purchasedCurrency.amount} {purchasedCurrency.name}
        </div>
      </div>
      <Button
        className="currency-exchange__filter-button"
        onClick={() =>
          addFilter({
            paymentCurrency: paymentCurrency,
            purchasedCurrency: purchasedCurrency,
          })
        }
      >
        <svg
          className="currency-exchange__filter-button-icon"
          stroke="#fff"
          fill="#fff"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          version="1.1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
          <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
        </svg>
        Save Filter
      </Button>
    </div>
  );
};

export default CurrencyHeader;
