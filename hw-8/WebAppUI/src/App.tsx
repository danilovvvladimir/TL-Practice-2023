import { useEffect } from "react";
import CurrencyExchange from "./components/CurrencyExchange/CurrencyExchange";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import { CurrentCurrenciesContext } from "./context/currentCurrencies";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import { FilterContext } from "./context/fitler";
import { CurrenciesContext } from "./context/currencies";
import { useCurrencies } from "./hooks/useCurrencies";
import { useFilters } from "./hooks/useFilters";
import { useSelectedCurrencies } from "./hooks/useSelectedCurrencies";

const App = () => {
  const { currencies, error, isLoadingCurrencies } = useCurrencies();
  const { filters, addFilter, clearFilters } = useFilters();
  const { purchasedCurrency, paymentCurrency, changePurchasedCurrency, changePaymentCurrency } =
    useSelectedCurrencies();

  useEffect(() => {
    if (currencies.length > 0) {
      changePurchasedCurrency({ amount: 1, ...currencies[0] });
      changePaymentCurrency({ amount: 1, ...currencies[1] });
    }
  }, [currencies]);

  const getCurrenciesFromTabs = (id: string) => {
    const neededFilter = filters.filter(f => f.id === id)[0];

    changePaymentCurrency({ amount: 1, ...neededFilter.paymentCurrency });
    changePurchasedCurrency({ amount: 1, ...neededFilter.purchasedCurrency });
  };

  if (isLoadingCurrencies) {
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

