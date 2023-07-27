import { useState, useEffect } from "react";
import CurrencyExchange from "./components/CurrencyExchange/CurrencyExchange";
import { fetchAllCurrencies } from "./utils/fetchData";
import { Currency, CurrencyWithAmount } from "./types/currency";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import { Filter, NewFilter } from "./types/filter";
import {
  CurrenciesContext,
  CurrentCurrenciesContext,
  FilterContext,
  defaultCurrencyWithAmount,
} from "./context/context";
import { v4 as uuidv4 } from "uuid";
import FilterTabs from "./components/FilterTabs/FilterTabs";

const App = () => {
  const [purchasedCurrency, setPurchasedCurrency] = useState<CurrencyWithAmount>(defaultCurrencyWithAmount);

  const [paymentCurrency, setPaymentCurrency] = useState<CurrencyWithAmount>(defaultCurrencyWithAmount);

  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = ({ paymentCurrency, purchasedCurrency }: NewFilter) => {
    const newFilter = { paymentCurrency, purchasedCurrency, id: uuidv4() };

    setFilters([newFilter, ...filters]);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const getCurrenciesFromTabs = (id: string) => {
    const neededFilter = filters.filter(f => f.id === id)[0];

    setPaymentCurrency({ amount: 1, ...neededFilter.paymentCurrency });
    setPurchasedCurrency({ amount: 1, ...neededFilter.purchasedCurrency });
  };

  const getAllCurrencies = async () => {
    const data: Currency[] = await fetchAllCurrencies();
    setCurrencies(data);

    setPurchasedCurrency({ amount: 1, ...data[0] });
    setPaymentCurrency({ amount: 1, ...data[1] });
  };

  const changePurchasedCurrency = (newCurrencyWithAmount: CurrencyWithAmount) => {
    setPurchasedCurrency({ ...newCurrencyWithAmount });
  };

  const changePaymentCurrency = (newCurrencyWithAmount: CurrencyWithAmount) => {
    setPaymentCurrency({ ...paymentCurrency, ...newCurrencyWithAmount });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        await getAllCurrencies();
      } catch (error) {
        setError("Could not get data from the server.");
      }
    };

    fetchData();
  }, []);

  if (currencies.length === 0 && !error) {
    return <Loader>Loading...</Loader>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <FilterContext.Provider value={{ filters, addFilter }}>
      <CurrenciesContext.Provider value={{ currencies }}>
        <CurrentCurrenciesContext.Provider
          value={{ paymentCurrency, purchasedCurrency, changePaymentCurrency, changePurchasedCurrency }}
        >
          <FilterTabs getCurrenciesFromTabs={getCurrenciesFromTabs} clearFilters={clearFilters} />
          <CurrencyExchange />
        </CurrentCurrenciesContext.Provider>
      </CurrenciesContext.Provider>
    </FilterContext.Provider>
  );
};

export default App;

