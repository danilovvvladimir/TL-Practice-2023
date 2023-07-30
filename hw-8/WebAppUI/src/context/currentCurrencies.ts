import { createContext } from "react";
import { CurrencyWithAmount } from "../types/currency";

export const initialCurrencyWithAmount: CurrencyWithAmount = {
  amount: 0,
  code: "",
  description: "",
  name: "",
  symbol: "",
};

interface CurrentCurrenciesContextType {
  purchasedCurrency: CurrencyWithAmount;
  paymentCurrency: CurrencyWithAmount;
  changePurchasedCurrency: (newCurrencyWithAmount: CurrencyWithAmount) => void;
  changePaymentCurrency: (newCurrencyWithAmount: CurrencyWithAmount) => void;
}

export const CurrentCurrenciesContext = createContext<CurrentCurrenciesContextType>({
  purchasedCurrency: initialCurrencyWithAmount,
  paymentCurrency: initialCurrencyWithAmount,
  changePurchasedCurrency: () => {},
  changePaymentCurrency: () => {},
});
