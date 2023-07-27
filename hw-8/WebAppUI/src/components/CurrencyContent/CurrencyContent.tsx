import { FC, ChangeEvent, useState, useEffect } from "react";
import "./CurrencyContent.css";
import { Currency, CurrencyCoefficient, CurrencyWithAmount } from "../../types/currency";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { CurrencyChart } from "../UI/CurrencyChart/CurrencyChart";
import Button from "../UI/Button/Button";
import { CHART_BUTTON_LABELS } from "../../constants/constants";

interface CurrencyContentProps {
  latestCoefficient: CurrencyCoefficient;
  purchasedCurrency: CurrencyWithAmount;
  paymentCurrency: CurrencyWithAmount;
  setPurchasedCurrency: (state: CurrencyWithAmount) => void;
  setPaymentCurrency: (state: CurrencyWithAmount) => void;
  currencies: Currency[];
  handleCurrencyChange: (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    activeCurrency: CurrencyWithAmount,
    passiveCurrency: CurrencyWithAmount,
    setActiveCurrency: (state: CurrencyWithAmount) => void,
    setPassiveCurrency: (state: CurrencyWithAmount) => void,
    currentCoefficient: number,
  ) => void;
  coefficientsHistory: CurrencyCoefficient[];
}

const CurrencyContent: FC<CurrencyContentProps> = ({
  latestCoefficient,
  paymentCurrency,
  purchasedCurrency,
  handleCurrencyChange,
  setPurchasedCurrency,
  setPaymentCurrency,
  currencies,
  coefficientsHistory,
}) => {
  const [currentCoefficients, setCurrentCoefficients] = useState<CurrencyCoefficient[]>(coefficientsHistory.slice(-6));

  const [currentTabIndex, setCurrentTabIndex] = useState(CHART_BUTTON_LABELS.length - 1);

  const handleChangeChartsCoefficients = (value: number) => {
    setCurrentTabIndex(6 - value - 1);
  };

  useEffect(() => {
    setCurrentCoefficients(coefficientsHistory.slice(6 * -(6 - currentTabIndex - 1)));
  }, [coefficientsHistory, currentTabIndex]);

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
      <div className="currency-exchange__content-chart">
        <div className="currency-exchange__chart-tabs">
          {CHART_BUTTON_LABELS.map((value, index) => {
            const finalClassName =
              index === currentTabIndex ? "currency-exchange__chart-button active" : "currency-exchange__chart-button";
            return (
              <Button
                key={value}
                onClick={() => handleChangeChartsCoefficients(value)}
                data-chart-value={value}
                className={finalClassName}
              >
                {value} MIN
              </Button>
            );
          })}
        </div>
        <CurrencyChart
          dataSet={currentCoefficients.map(coef => coef.price)}
          labels={currentCoefficients.map(coef => coef.dateTime)}
        />
      </div>
    </div>
  );
};

export default CurrencyContent;
