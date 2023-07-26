import { FC, ChangeEvent } from "react";
import "./CurrencyContent.css";
import { Currency, CurrencyCoefficient, CurrencyWithAmount } from "../../types/currency";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

interface CurrencyContentProps {
  latestCoefficient: CurrencyCoefficient;
  purchasedCurrency: CurrencyWithAmount;
  paymentCurrency: CurrencyWithAmount;
  handleCurrencyChange: (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    activeCurrency: CurrencyWithAmount,
    passiveCurrency: CurrencyWithAmount,
    setActiveCurrency: (state: CurrencyWithAmount) => void,
    setPassiveCurrency: (state: CurrencyWithAmount) => void,
    currentCoefficient: number,
  ) => void;
  setPurchasedCurrency: (state: CurrencyWithAmount) => void;
  setPaymentCurrency: (state: CurrencyWithAmount) => void;
  currencies: Currency[];
}

const CurrencyContent: FC<CurrencyContentProps> = ({
  latestCoefficient,
  paymentCurrency,
  purchasedCurrency,
  handleCurrencyChange,
  setPurchasedCurrency,
  setPaymentCurrency,
  currencies,
}) => {
  return (
    <div className="currency-exchange__content">
      <div className="currency-exchange__content-info">
        <div className="currency-exchange__content-date">
          {new Date(latestCoefficient.dateTime).toUTCString().slice(0, -7) + " UTC"}
        </div>
        <div className="currency-exchange__content-selects">
          <CurrencySelect
            value={purchasedCurrency}
            onChange={e =>
              handleCurrencyChange(
                e,
                purchasedCurrency,
                paymentCurrency,
                setPurchasedCurrency,
                setPaymentCurrency,
                latestCoefficient.price,
              )
            }
            options={currencies.map(c => c.code)}
          />

          <CurrencySelect
            value={paymentCurrency}
            onChange={e =>
              handleCurrencyChange(
                e,
                paymentCurrency,
                purchasedCurrency,
                setPaymentCurrency,
                setPurchasedCurrency,
                1 / latestCoefficient.price,
              )
            }
            options={currencies.map(c => c.code)}
          />
        </div>
      </div>
      <div className="currency-exchange__content-graphs"></div>
    </div>
  );
};

export default CurrencyContent;
