import { createContext } from "react";
import { CurrentCurrencies, Filter } from "../types/filter";

interface FilterContextType {
  filters: Filter[];
  addFilter: (review: CurrentCurrencies) => void;
}

export const FilterContext = createContext<FilterContextType>({
  filters: [],
  addFilter: () => {},
});
