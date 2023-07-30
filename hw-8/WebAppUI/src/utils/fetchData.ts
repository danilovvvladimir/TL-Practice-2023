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
  const response = await fetch(
    `${API_URL}/prices?${new URLSearchParams({
      PaymentCurrency: paymentCurrencyCode,
      PurchasedCurrency: purchasedCurrencyCode,
    })}`,
  );

  return await response.json();
};
