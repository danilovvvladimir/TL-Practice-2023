import { FC, ChangeEvent, useState, useEffect } from "react";
import Description from "../Description/Description";
import "./CurrencyExchange.css";
import { Currency, CurrencyCoefficient, CurrencyWithAmount } from "../../types/currency";
import { getCoefficientBetweenCurrencies, getCurrency } from "../../utils/fetchData";
import { FETCH_API_OFFSET } from "../../constants/api";
import CurrencyContent from "../CurrencyContent/CurrencyContent";
import Loader from "../Loader/Loader";

interface CurrencyExchangeProps {
  currencies: Currency[];
}

const CurrencyExchange: FC<CurrencyExchangeProps> = ({ currencies }) => {
  const [purchasedCurrency, setPurchasedCurrency] = useState<CurrencyWithAmount>({
    amount: 1,
    ...currencies[0],
  });

  const [paymentCurrency, setPaymentCurrency] = useState<CurrencyWithAmount>({
    amount: 1,
    ...currencies[1],
  });

  const [coefficientsHistory, setCoefficientsHistory] = useState<CurrencyCoefficient[]>([]);

  const latestCoefficient =
    coefficientsHistory.length > 0 ? coefficientsHistory[coefficientsHistory.length - 1] : undefined;

  const handleCurrencyChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    activeCurrency: CurrencyWithAmount,
    passiveCurrency: CurrencyWithAmount,
    setActiveCurrency: (state: CurrencyWithAmount) => void,
    setPassiveCurrency: (state: CurrencyWithAmount) => void,
    currentCoefficient: number,
  ) => {
    if (event.target instanceof HTMLSelectElement) {
      const activeCurrencyCode = event.target.value;

      setActiveCurrency({ ...activeCurrency, code: activeCurrencyCode });
    } else {
      const activeCurrencyQuantity = parseFloat(event.target.value);

      setActiveCurrency({
        ...activeCurrency,
        amount: activeCurrencyQuantity > 0 ? activeCurrencyQuantity : 1,
      });

      setPassiveCurrency({
        ...passiveCurrency,
        amount:
          activeCurrencyQuantity * currentCoefficient > 0
            ? activeCurrencyQuantity * currentCoefficient
            : currentCoefficient,
      });
    }
  };

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

  const updatePurchasedCurrency = async () => {
    const data = await fetchCurrencyByCode(purchasedCurrency.code);
    setPurchasedCurrency(prevCurrency => ({ ...prevCurrency, ...data }));
  };

  const updatePaymentCurrency = async () => {
    const data = await fetchCurrencyByCode(paymentCurrency.code);
    setPaymentCurrency(prevCurrency => ({
      ...prevCurrency,
      ...data,
      amount: latestCoefficient ? latestCoefficient.price * purchasedCurrency.amount : 1,
    }));
  };

  const updateCoefficientsHistory = async () => {
    const data = await fetchCoefficient(paymentCurrency.code, purchasedCurrency.code);
    setCoefficientsHistory(data);
  };

  useEffect(() => {
    updatePurchasedCurrency();
    updatePaymentCurrency();
    updateCoefficientsHistory();
  }, [purchasedCurrency.code, purchasedCurrency.amount, paymentCurrency.code, latestCoefficient?.price]);

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
          <div className="currency-exchange__header">
            <div className="currency-exchange__purchased">
              {purchasedCurrency.amount} {purchasedCurrency.name} is
            </div>
            <div className="currency-exchange__payment">
              {paymentCurrency.amount} {paymentCurrency.name}
            </div>
          </div>

          {latestCoefficient === undefined ? (
            <Loader>Loading data about current Currency...</Loader>
          ) : (
            <CurrencyContent
              handleCurrencyChange={handleCurrencyChange}
              latestCoefficient={latestCoefficient}
              paymentCurrency={paymentCurrency}
              purchasedCurrency={purchasedCurrency}
              currencies={currencies}
              setPaymentCurrency={setPaymentCurrency}
              setPurchasedCurrency={setPurchasedCurrency}
            />
          )}

          <Description purchasedCurrency={purchasedCurrency} paymentCurrency={paymentCurrency} />
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
