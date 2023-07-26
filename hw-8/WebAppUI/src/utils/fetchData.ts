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
  const queryFromDate = fromDate.toISOString().slice(0, 19) + "Z";
  const queryToDate = toDate ? `&ToDateTime=${toDate.toISOString().slice(0, 19) + "Z"}` : "";
  console.log(queryFromDate);

  const queryString = `?${queryPaymentCode}&${queryPurchasedCode}&${queryFromDate}${queryToDate}'`;

  const response = await fetch(`${API_URL}/prices${queryString}}`);

  return await response.json();
};
