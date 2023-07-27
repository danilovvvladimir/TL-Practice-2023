import { FC, useState, useEffect, useContext } from "react";
import Description from "../Description/Description";
import "./CurrencyExchange.css";
import { Currency, CurrencyCoefficient } from "../../types/currency";
import { fetchCoefficientBetweenCurrencies, fetchCurrency } from "../../utils/fetchData";
import { FETCH_API_OFFSET } from "../../constants/constants";
import CurrencyContent from "../CurrencyContent/CurrencyContent";
import Loader from "../Loader/Loader";
import CurrencyHeader from "../CurrencyHeader/CurrencyHeader";
import { handleCurrencyChange } from "../../utils/handleCurrencyChange";
import { CurrentCurrenciesContext } from "../../context/context";

const CurrencyExchange: FC = () => {
  const {
    changePaymentCurrency: setPaymentCurrency,
    changePurchasedCurrency: setPurchasedCurrency,
    paymentCurrency,
    purchasedCurrency,
  } = useContext(CurrentCurrenciesContext);

  const [coefficientsHistory, setCoefficientsHistory] = useState<CurrencyCoefficient[]>([]);

  const [latestCoefficient, setLatestCoefficient] = useState<CurrencyCoefficient | undefined>(undefined);

  const getCurrencyByCode = async (code: string) => {
    const data = await fetchCurrency(code);
    return data;
  };

  const getCoefficient = async (
    paymentCurrencyCode: string,
    purchasedCurrencyCode: string,
    fromDate: Date = new Date(),
  ): Promise<CurrencyCoefficient[]> => {
    const data = await fetchCoefficientBetweenCurrencies(paymentCurrencyCode, purchasedCurrencyCode, fromDate);
    return data;
  };

  const updatePaymentCurrency = async () => {
    const newPaymentCurrency: Currency = await getCurrencyByCode(paymentCurrency.code);

    setPaymentCurrency({
      amount: paymentCurrency.amount,
      ...newPaymentCurrency,
    });
  };

  const updatePurchasedCurrency = async () => {
    const newPurchasedCurrency: Currency = await getCurrencyByCode(purchasedCurrency.code);

    setPurchasedCurrency({
      ...newPurchasedCurrency,
      amount: latestCoefficient ? latestCoefficient.price * paymentCurrency.amount : 1,
    });
  };

  const updateCoefficientsHistory = async () => {
    const data: CurrencyCoefficient[] = await getCoefficient(purchasedCurrency.code, paymentCurrency.code);
    setCoefficientsHistory(data);

    setLatestCoefficient(data[data.length - 1]);
  };

  useEffect(() => {
    updatePaymentCurrency();
    updatePurchasedCurrency();
    updateCoefficientsHistory();
  }, [paymentCurrency.code, purchasedCurrency.code, latestCoefficient?.price]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await updateCoefficientsHistory();
    }, FETCH_API_OFFSET);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="currency-exchange">
      <div className="container">
        <div className="currency-exchange__wrapper">
          <CurrencyHeader paymentCurrency={paymentCurrency} purchasedCurrency={purchasedCurrency} />

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
