import { useState } from "react";
import { CurrentCurrencies, Filter } from "../types/filter";
import { v4 as uuidv4 } from "uuid";

export const useFilters = () => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = ({ paymentCurrency, purchasedCurrency }: CurrentCurrencies) => {
    const newFilter = { paymentCurrency, purchasedCurrency, id: uuidv4() };
    setFilters(prevFilters => [newFilter, ...prevFilters]);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return { filters, addFilter, clearFilters };
};
