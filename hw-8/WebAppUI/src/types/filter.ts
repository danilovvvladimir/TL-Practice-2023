export interface Filter {
  id: string;
  purchasedCurrencyCode: string;
  paymentCurrencyCode: string;
}

export interface NewFilter extends Omit<Filter, "id"> {}
