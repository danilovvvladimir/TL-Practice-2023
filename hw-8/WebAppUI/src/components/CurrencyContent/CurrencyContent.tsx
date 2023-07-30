import { FC, useState, useEffect, useContext } from "react";
import "./CurrencyContent.css";
import { CurrencyCoefficient } from "../../types/currency";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { CHART_BUTTON_LABELS, DOTS_PER_MINUTE } from "../../constants/constants";
import { HandleCurrencyChangeType } from "../../utils/handleCurrencyChange";
import { CurrentCurrenciesContext } from "../../context/currentCurrencies";
import CurrencyChart from "../CurrencyChart/CurrencyChart";
import { CurrenciesContext } from "../../context/currencies";

interface CurrencyContentProps {
  latestCoefficient: CurrencyCoefficient;
  handleCurrencyChange: HandleCurrencyChangeType;
  coefficientsHistory: CurrencyCoefficient[];
}

const CurrencyContent: FC<CurrencyContentProps> = ({
  latestCoefficient,
  handleCurrencyChange,
  coefficientsHistory,
}) => {
  const { currencies } = useContext(CurrenciesContext);

  const {
    changePaymentCurrency: setPaymentCurrency,
    changePurchasedCurrency: setPurchasedCurrency,
    paymentCurrency,
    purchasedCurrency,
  } = useContext(CurrentCurrenciesContext);

  const [currentCoefficients, setCurrentCoefficients] = useState<CurrencyCoefficient[]>(
    coefficientsHistory.slice(-DOTS_PER_MINUTE),
  );

  const [currentTabIndex, setCurrentTabIndex] = useState(CHART_BUTTON_LABELS.length - 1);

  useEffect(() => {
    setCurrentCoefficients(coefficientsHistory.slice(DOTS_PER_MINUTE * -(DOTS_PER_MINUTE - currentTabIndex - 1)));
  }, [coefficientsHistory, currentTabIndex]);

  return (
    <div className="currency-exchange__content">
      <div className="currency-exchange__content-info">
        <div className="currency-exchange__content-date">
          {new Date(latestCoefficient.dateTime).toUTCString().slice(0, -7) + " UTC"}
        </div>
        <div className="currency-exchange__content-selects">
          <CurrencySelect
            value={paymentCurrency}
            onChange={e =>
              handleCurrencyChange(
                e,
                paymentCurrency,
                purchasedCurrency,
                setPaymentCurrency,
                setPurchasedCurrency,
                latestCoefficient.price,
              )
            }
            options={currencies.map(c => c.code)}
          />

          <CurrencySelect
            value={purchasedCurrency}
            onChange={e =>
              handleCurrencyChange(
                e,
                purchasedCurrency,
                paymentCurrency,
                setPurchasedCurrency,
                setPaymentCurrency,
                1 / latestCoefficient.price,
              )
            }
            options={currencies.map(c => c.code)}
          />
        </div>
      </div>

      <CurrencyChart
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
        currentCoefficients={currentCoefficients}
      />
    </div>
  );
};

export default CurrencyContent;
