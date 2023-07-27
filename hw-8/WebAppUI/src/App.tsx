import { useState, useEffect } from "react";
import CurrencyExchange from "./components/CurrencyExchange/CurrencyExchange";
import { getAllCurrencies } from "./utils/fetchData";
import { Currency } from "./types/currency";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import { Filter, NewFilter } from "./types/filter";
import { CurrenciesContext, FilterContext } from "./context/context";
import { v4 as uuidv4 } from "uuid";
import FilterTabs from "./components/FilterTabs/FilterTabs";

const App = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = ({ paymentCurrencyCode, purchasedCurrencyCode }: NewFilter) => {
    const newFilter = { paymentCurrencyCode, purchasedCurrencyCode, id: uuidv4() };

    setFilters([newFilter, ...filters]);
  };

  const fetchAllCurrencies = async () => {
    const data: Currency[] = await getAllCurrencies();
    setCurrencies(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        await fetchAllCurrencies();
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
        <FilterTabs />
        <CurrencyExchange
          defaultPaymentCurrency={{ amount: 1, ...currencies[0] }}
          defaultPurchasedCurrency={{ amount: 1, ...currencies[1] }}
        />
      </CurrenciesContext.Provider>
    </FilterContext.Provider>
  );
};

export default App;

