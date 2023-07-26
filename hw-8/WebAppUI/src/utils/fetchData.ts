import { API_URL } from "../constants/api";

export const getAllCurrencies = async () => {
  const response = await fetch(`${API_URL}/Currencies`);

  return await response.json();
};

export const getCurrency = async (code: string) => {
  const response = await fetch(`${API_URL}/Currencies/${code.toUpperCase()}`);

  return await response.json();
};

export const getCoefficientBetweenCurrencies = async (
  paymentCurrencyCode: string,
  purchasedCurrencyCode: string,
  fromDate: Date,
  toDate?: Date,
) => {
  const queryPaymentCode = `PaymentCurrency=${paymentCurrencyCode}`;
  const queryPurchasedCode = `PurchasedCurrency=${purchasedCurrencyCode}`;
  const queryFromDate = `FromDateTime=${fromDate.toDateString()}`;
  const queryToDate = toDate ? `&ToDateTime=${toDate.toDateString()}` : "";

  const queryString = `?${queryPaymentCode}&${queryPurchasedCode}&${queryFromDate}${queryToDate}'`;

  const response = await fetch(`${API_URL}/price/${queryString}}`);

  return await response.json();
};
