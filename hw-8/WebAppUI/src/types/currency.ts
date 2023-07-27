export interface Currency {
  code: string;
  name: string;
  description: string;
  symbol: string;
}

export interface CurrencyWithAmount extends Currency {
  amount: number;
}

export interface CurrencyCoefficient {
  dateTime: string;
  paymentCurrencyCode: string;
  purchasedCurrencyCode: string;
  price: number;
}
