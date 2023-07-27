import { Currency } from "./currency";

export interface CurrentCurrencies {
  purchasedCurrency: Currency;
  paymentCurrency: Currency;
}

export interface Filter extends CurrentCurrencies {
  id: string;
}

export interface NewFilter extends Omit<Filter, "id"> {}
