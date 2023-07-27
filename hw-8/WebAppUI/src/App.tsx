import { useState, useEffect } from "react";
import CurrencyExchange from "./components/CurrencyExchange/CurrencyExchange";
import { getAllCurrencies } from "./utils/fetchData";
import { Currency } from "./types/currency";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [error, setError] = useState("");

  const fetchAllCurrencies = async () => {
    const data = await getAllCurrencies();
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

  return <CurrencyExchange currencies={currencies} />;
};

export default App;

