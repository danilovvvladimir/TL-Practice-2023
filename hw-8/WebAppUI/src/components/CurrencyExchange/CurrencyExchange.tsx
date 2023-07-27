import { FC, useState, useEffect } from "react";
import Description from "../Description/Description";
import "./CurrencyExchange.css";
import { Currency, CurrencyCoefficient, CurrencyWithAmount } from "../../types/currency";
import { getCoefficientBetweenCurrencies, getCurrency } from "../../utils/fetchData";
import { FETCH_API_OFFSET } from "../../constants/constants";
import CurrencyContent from "../CurrencyContent/CurrencyContent";
import Loader from "../Loader/Loader";
import CurrencyHeader from "../CurrencyHeader/CurrencyHeader";
import { handleCurrencyChange } from "../../utils/handleCurrencyChange";

interface CurrencyExchangeProps {
  defaultPurchasedCurrency: CurrencyWithAmount;
  defaultPaymentCurrency: CurrencyWithAmount;
}

const CurrencyExchange: FC<CurrencyExchangeProps> = ({ defaultPaymentCurrency, defaultPurchasedCurrency }) => {
  const [paymentCurrency, setPaymentCurrency] = useState<CurrencyWithAmount>(defaultPaymentCurrency);
  const [purchasedCurrency, setPurchasedCurrency] = useState<CurrencyWithAmount>(defaultPurchasedCurrency);

  const [coefficientsHistory, setCoefficientsHistory] = useState<CurrencyCoefficient[]>([]);

  const [latestCoefficient, setLatestCoefficient] = useState<CurrencyCoefficient | undefined>(undefined);

  const fetchCurrencyByCode = async (code: string) => {
    const data = await getCurrency(code);
    return data;
  };

  const fetchCoefficient = async (
    paymentCurrencyCode: string,
    purchasedCurrencyCode: string,
    fromDate: Date = new Date(),
  ): Promise<CurrencyCoefficient[]> => {
    const data = await getCoefficientBetweenCurrencies(paymentCurrencyCode, purchasedCurrencyCode, fromDate);
    return data;
  };

  const updatePaymentCurrency = async () => {
    const newPaymentCurrency: Currency = await fetchCurrencyByCode(paymentCurrency.code);

    setPaymentCurrency({
      amount: paymentCurrency.amount,
      ...newPaymentCurrency,
    });
  };

  const updatePurchasedCurrency = async () => {
    const newPurchasedCurrency: Currency = await fetchCurrencyByCode(purchasedCurrency.code);
    setPurchasedCurrency({
      ...newPurchasedCurrency,
      amount: latestCoefficient ? latestCoefficient.price * paymentCurrency.amount : 1,
    });
  };

  const updateCoefficientsHistory = async () => {
    const data: CurrencyCoefficient[] = await fetchCoefficient(purchasedCurrency.code, paymentCurrency.code);
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
  }, [coefficientsHistory]);

  return (
    <section className="currency-exchange">
      <div className="container">
        <div className="currency-exchange__wrapper">
          <CurrencyHeader paymentCurrency={paymentCurrency} purchasedCurrency={purchasedCurrency} />

          {latestCoefficient === undefined ? (
            <Loader>Loading data about current Currency...</Loader>
          ) : (
            <CurrencyContent
              purchasedCurrency={purchasedCurrency}
              paymentCurrency={paymentCurrency}
              coefficientsHistory={coefficientsHistory}
              handleCurrencyChange={handleCurrencyChange}
              setPaymentCurrency={setPaymentCurrency}
              setPurchasedCurrency={setPurchasedCurrency}
              latestCoefficient={latestCoefficient}
            />
          )}

          <Description paymentCurrency={paymentCurrency} purchasedCurrency={purchasedCurrency} />
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
