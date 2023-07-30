import { FC, useState, useEffect, useContext } from "react";
import Description from "../Description/Description";
import "./CurrencyExchange.css";
import { Currency, CurrencyCoefficient, CurrencyWithAmount } from "../../types/currency";
import { fetchCoefficientBetweenCurrencies } from "../../utils/fetchData";
import { FETCH_API_OFFSET } from "../../constants/constants";
import CurrencyContent from "../CurrencyContent/CurrencyContent";
import Loader from "../Loader/Loader";
import CurrencyHeader from "../CurrencyHeader/CurrencyHeader";
import { handleCurrencyChange } from "../../utils/handleCurrencyChange";
import { CurrentCurrenciesContext } from "../../context/currentCurrencies";
import { CurrenciesContext } from "../../context/currencies";

const CurrencyExchange: FC = () => {
  const {
    changePaymentCurrency: setPaymentCurrency,
    changePurchasedCurrency: setPurchasedCurrency,
    paymentCurrency,
    purchasedCurrency,
  } = useContext(CurrentCurrenciesContext);

  const { currencies } = useContext(CurrenciesContext);

  const [coefficientsHistory, setCoefficientsHistory] = useState<CurrencyCoefficient[]>([]);

  const [latestCoefficient, setLatestCoefficient] = useState<CurrencyCoefficient | undefined>(undefined);

  const updatePaymentCurrency = async () => {
    const newPaymentCurrency: Currency = currencies.find(c => c.code === paymentCurrency.code) as Currency;

    setPaymentCurrency({
      amount: paymentCurrency.amount,
      ...newPaymentCurrency,
    });
  };

  const updatePurchasedCurrency = async () => {
    const newPurchasedCurrency: Currency = currencies.find(c => c.code === purchasedCurrency.code) as Currency;

    setPurchasedCurrency({
      ...newPurchasedCurrency,
      amount: latestCoefficient ? latestCoefficient.price * paymentCurrency.amount : 1,
    });
  };

  const updateCoefficientsHistory = async (
    paymentCurrency: CurrencyWithAmount,
    purchasedCurrency: CurrencyWithAmount,
  ) => {
    const data: CurrencyCoefficient[] = await fetchCoefficientBetweenCurrencies(
      paymentCurrency.code,
      purchasedCurrency.code,
    );

    setCoefficientsHistory(data);
    setLatestCoefficient(data[data.length - 1]);
  };

  useEffect(() => {
    updatePaymentCurrency();
    updatePurchasedCurrency();
    updateCoefficientsHistory(paymentCurrency, purchasedCurrency);
  }, [paymentCurrency.code, purchasedCurrency.code]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await updateCoefficientsHistory(paymentCurrency, purchasedCurrency);
    }, FETCH_API_OFFSET);

    return () => {
      clearInterval(intervalId);
    };
  }, [paymentCurrency, purchasedCurrency]);

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
