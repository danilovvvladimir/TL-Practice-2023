import { useContext, useEffect, useState } from "react";
import { CurrentCurrenciesContext } from "../context/currentCurrencies";
import { CurrenciesContext } from "../context/currencies";
import { Currency, CurrencyCoefficient, CurrencyWithAmount } from "../types/currency";
import { fetchCoefficientBetweenCurrencies } from "../utils/fetchData";
import { FETCH_API_OFFSET } from "../constants/constants";

export const useCurrencyExchange = () => {
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

    const intervalId = setInterval(async () => {
      await updateCoefficientsHistory(paymentCurrency, purchasedCurrency);
    }, FETCH_API_OFFSET);

    return () => {
      clearInterval(intervalId);
    };
  }, [paymentCurrency.code, purchasedCurrency.code]);

  return {
    coefficientsHistory,
    latestCoefficient,
  };
};
