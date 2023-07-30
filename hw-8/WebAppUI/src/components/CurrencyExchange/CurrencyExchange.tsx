import { FC } from "react";
import Description from "../Description/Description";
import "./CurrencyExchange.css";
import CurrencyContent from "../CurrencyContent/CurrencyContent";
import Loader from "../Loader/Loader";
import CurrencyHeader from "../CurrencyHeader/CurrencyHeader";
import { handleCurrencyChange } from "../../utils/handleCurrencyChange";
import { useCurrencyExchange } from "../../hooks/useCurrencyExchange";

const CurrencyExchange: FC = () => {
  const { coefficientsHistory, latestCoefficient } = useCurrencyExchange();

  return (
    <section className="currency-exchange">
      <div className="container">
        <div className="currency-exchange__wrapper">
          <CurrencyHeader />

          {latestCoefficient === undefined ? (
            <Loader>Loading data about current Currency...</Loader>
          ) : (
            <CurrencyContent
              coefficientsHistory={coefficientsHistory}
              handleCurrencyChange={handleCurrencyChange}
              latestCoefficient={latestCoefficient}
            />
          )}

          <Description />
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
