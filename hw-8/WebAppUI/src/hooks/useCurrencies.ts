import { useEffect, useState } from "react";
import { Currency } from "../types/currency";
import { fetchAllCurrencies } from "../utils/fetchData";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [isLoadingCurrencies, setLoadingCurrencies] = useState<boolean>(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAllCurrencies = async () => {
      try {
        setLoadingCurrencies(true);
        setError("");
        const data: Currency[] = await fetchAllCurrencies();
        setCurrencies(data);
      } catch (error) {
        setError("Could not get data from the server.");
      } finally {
        setLoadingCurrencies(false);
      }
    };

    getAllCurrencies();
  }, []);

  return { currencies, isLoadingCurrencies, error };
};
