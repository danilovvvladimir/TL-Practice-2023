import { createContext } from "react";
import { Currency } from "../types/currency";

interface CurrenciesContextType {
  currencies: Currency[];
}

export const CurrenciesContext = createContext<CurrenciesContextType>({
  currencies: [],
});
