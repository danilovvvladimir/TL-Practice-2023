import { useState } from "react";
import { CurrencyWithAmount } from "../types/currency";
import { initialCurrencyWithAmount } from "../context/currentCurrencies";

export const useSelectedCurrencies = () => {
  const [purchasedCurrency, setPurchasedCurrency] = useState<CurrencyWithAmount>(initialCurrencyWithAmount);
  const [paymentCurrency, setPaymentCurrency] = useState<CurrencyWithAmount>(initialCurrencyWithAmount);

  const changePurchasedCurrency = (newCurrencyWithAmount: CurrencyWithAmount) => {
    setPurchasedCurrency(newCurrencyWithAmount);
  };

  const changePaymentCurrency = (newCurrencyWithAmount: CurrencyWithAmount) => {
    setPaymentCurrency(prevPaymentCurrency => ({ ...prevPaymentCurrency, ...newCurrencyWithAmount }));
  };

  return { purchasedCurrency, paymentCurrency, changePurchasedCurrency, changePaymentCurrency };
};
