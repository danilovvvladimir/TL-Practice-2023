import { ChangeEvent } from "react";
import { CurrencyWithAmount } from "../types/currency";

export interface HandleCurrencyChangeType {
  (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    activeCurrency: CurrencyWithAmount,
    passiveCurrency: CurrencyWithAmount,
    setActiveCurrency: (state: CurrencyWithAmount) => void,
    setPassiveCurrency: (state: CurrencyWithAmount) => void,
    currentCoefficient: number,
  ): void;
}

export const handleCurrencyChange: HandleCurrencyChangeType = (
  event,
  activeCurrency,
  passiveCurrency,
  setActiveCurrency,
  setPassiveCurrency,
  currentCoefficient,
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
