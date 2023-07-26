import { useState, useEffect } from "react";
import CurrencyExchange from "./components/CurrencyExchange/CurrencyExchange";
import { getAllCurrencies } from "./utils/fetchData";
import { Currency } from "./types/currency";

const App = () => {
  const [currencies, setCurrencies] = useState<Currency[] | undefined>();

  const fetchAllCurrencies = async () => {
    const data = await getAllCurrencies();

    setCurrencies(data);
  };

  useEffect(() => {
    fetchAllCurrencies();
  }, []);

  if (currencies === undefined) {
    return <h1>Loading...</h1>;
  }

  return <CurrencyExchange currencies={currencies} />;
};

export default App;

