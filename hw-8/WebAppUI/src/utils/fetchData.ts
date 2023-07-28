import { API_URL } from "../constants/constants";

export const fetchAllCurrencies = async () => {
  const response = await fetch(`${API_URL}/Currencies`);

  return await response.json();
};

export const fetchCurrency = async (code: string) => {
  const response = await fetch(`${API_URL}/Currencies/${code.toUpperCase()}`);

  return await response.json();
};

export const fetchCoefficientBetweenCurrencies = async (
  paymentCurrencyCode: string,
  purchasedCurrencyCode: string,
  fromDate: Date,
) => {
  const queryPaymentCode = `PaymentCurrency=${paymentCurrencyCode}`;
  const queryPurchasedCode = `PurchasedCurrency=${purchasedCurrencyCode}`;
  const queryFromDate = fromDate.toISOString().slice(0, 19) + "Z";

  const queryString = `?${queryPaymentCode}&${queryPurchasedCode}&${queryFromDate}'`;

  const response = await fetch(`${API_URL}/prices${queryString}}`);

  return await response.json();
};