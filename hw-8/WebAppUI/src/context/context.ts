import { createContext } from "react";
import { Filter, NewFilter } from "../types/filter";
import { Currency } from "../types/currency";

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
