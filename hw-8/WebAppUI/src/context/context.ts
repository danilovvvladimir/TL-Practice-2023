import { createContext } from "react";
import { Filter, NewFilter } from "../types/filter";
import { Currency, CurrencyWithAmount } from "../types/currency";

interface FilterContextType {
  filters: Filter[];
  addFilter: (review: NewFilter) => void;
}

export const FilterContext = createContext<FilterContextType>({
  filters: [],
  addFilter: () => {},
});

interface CurrenciesContextType {
  currencies: Currency[];
}

export const CurrenciesContext = createContext<CurrenciesContextType>({
  currencies: [],
});

export const defaultCurrencyWithAmount: CurrencyWithAmount = {
  amount: 1,
  code: "X",
  description: "X",
  name: "X",
  symbol: "X",
};

interface CurrentCurrenciesContextType {
  purchasedCurrency: CurrencyWithAmount;
  paymentCurrency: CurrencyWithAmount;
  changePurchasedCurrency: (newCurrencyWithAmount: CurrencyWithAmount) => void;
  changePaymentCurrency: (newCurrencyWithAmount: CurrencyWithAmount) => void;
}

export const CurrentCurrenciesContext = createContext<CurrentCurrenciesContextType>({
  purchasedCurrency: defaultCurrencyWithAmount,
  paymentCurrency: defaultCurrencyWithAmount,
  changePurchasedCurrency: () => {},
  changePaymentCurrency: () => {},
});
