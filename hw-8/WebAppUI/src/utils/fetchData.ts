import { API_URL } from "../constants/constants";

export const fetchAllCurrencies = async () => {
  const response = await fetch(`${API_URL}/Currencies`);

  return await response.json();
};

export const fetchCurrency = async (code: string) => {
  const response = await fetch(`${API_URL}/Currencies/${code.toUpperCase()}`);

  return await response.json();
};

export const fetchCoefficientBetweenCurrencies = async (paymentCurrencyCode: string, purchasedCurrencyCode: string) => {
  const fromDateTime = new Date(new Date().getTime() - 5 * 60 * 1000);

  const response = await fetch(
    `${API_URL}/prices?${new URLSearchParams({
      PaymentCurrency: paymentCurrencyCode,
      PurchasedCurrency: purchasedCurrencyCode,
      FromDateTime: fromDateTime.toISOString().slice(0, 19) + "Z",
      ToDateTime: new Date().toISOString().slice(0, 19) + "Z",
    })}`,
  );

  return await response.json();
};
