import { FC, ChangeEvent, useState, useEffect } from "react";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import Description from "../Description/Description";
import "./CurrencyExchange.css";
import { Currency, CurrencyCoefficient, CurrencyWithAmount } from "../../types/currency";
import { getCoefficientBetweenCurrencies, getCurrency } from "../../utils/fetchData";

interface CurrencyExchangeProps {
  currencies: Currency[];
}

const CurrencyExchange: FC<CurrencyExchangeProps> = ({ currencies }) => {
  const [purchasedCurrency, setPurchasedCurrency] = useState<CurrencyWithAmount>({
    amount: 1,
    ...currencies[0],
  });

  const [paymentCurrency, setPaymentCurrency] = useState<CurrencyWithAmount>({
    amount: 1,
    ...currencies[1],
  });

  const [coefficient, setCoefficient] = useState<number>(1);

  const handlePurchasedCurrencyChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      const purchasedCurrencyCode = event.target.value;

      setPurchasedCurrency({ ...purchasedCurrency, code: purchasedCurrencyCode });
    } else {
      const purchasedCurrencyQuantity = parseFloat(event.target.value);

      setPurchasedCurrency({
        ...purchasedCurrency,
        amount: purchasedCurrencyQuantity > 0 ? purchasedCurrencyQuantity : 1,
      });

      setPaymentCurrency({
        ...paymentCurrency,
        amount: purchasedCurrencyQuantity * coefficient > 0 ? purchasedCurrencyQuantity * coefficient : coefficient,
      });
    }
  };

  const handlePaymentCurrencyChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      const paymentCurrencyCode = event.target.value;

      setPaymentCurrency({ ...paymentCurrency, code: paymentCurrencyCode });
    } else {
      const paymentCurrencyQuantity = parseFloat(event.target.value);
      console.log("quanitty change", paymentCurrencyQuantity);

      setPaymentCurrency({
        ...paymentCurrency,
        amount: paymentCurrencyQuantity > 0 ? paymentCurrencyQuantity : 1,
      });

      setPurchasedCurrency({
        ...purchasedCurrency,
        amount: paymentCurrencyQuantity / coefficient > 0 ? paymentCurrencyQuantity / coefficient : 1 / coefficient,
      });
    }
  };

  const fetchCurrencyByCode = async (code: string) => {
    const data = await getCurrency(code);
    return data;
  };

  const fetchCoefficient = async (
    paymentCurrencyCode: string,
    purchasedCurrencyCode: string,
    fromDate: Date = new Date(),
  ): Promise<CurrencyCoefficient[]> => {
    const data = await getCoefficientBetweenCurrencies(paymentCurrencyCode, purchasedCurrencyCode, fromDate);
    return data;
  };

  useEffect(() => {
    const updatePurchasedCurrency = async () => {
      const data = await fetchCurrencyByCode(purchasedCurrency.code);
      setPurchasedCurrency(prevCurrency => ({ ...prevCurrency, ...data }));
    };

    const updatePaymentCurrency = async () => {
      const data = await fetchCurrencyByCode(paymentCurrency.code);
      setPaymentCurrency(prevCurrency => ({
        ...prevCurrency,
        ...data,
        amount: coefficient * purchasedCurrency.amount,
      }));
    };

    const updateCoefficient = async () => {
      const data = await fetchCoefficient(paymentCurrency.code, purchasedCurrency.code);
      setCoefficient(data[data.length - 1].price);
    };

    updatePurchasedCurrency();
    updatePaymentCurrency();
    updateCoefficient();
  }, [purchasedCurrency.code, purchasedCurrency.amount, paymentCurrency.code, coefficient]);

  return (
    <section className="currency-exchange">
      <div className="container">
        <div className="currency-exchange__wrapper">
          <div className="currency-exchange__header">
            <div className="currency-exchange__purchased">
              {purchasedCurrency.amount} {purchasedCurrency.name} is
            </div>
            <div className="currency-exchange__payment">
              {paymentCurrency.amount} {paymentCurrency.name}
            </div>
          </div>

          <div className="currency-exchange__content">
            <div className="currency-exchange__content-info">
              <div className="currency-exchange__content-date">26.июл., 04:12 UTC</div>
              <div className="currency-exchange__content-selects">
                <CurrencySelect
                  purchasedCurrencyValue={purchasedCurrency}
                  onPurchasedCurrencyChange={handlePurchasedCurrencyChange}
                  options={currencies.map(c => c.code)}
                />

                <CurrencySelect
                  purchasedCurrencyValue={paymentCurrency}
                  onPurchasedCurrencyChange={handlePaymentCurrencyChange}
                  options={currencies.map(c => c.code)}
                />
              </div>
            </div>
            <div className="currency-exchange__content-graphs"></div>
          </div>

          <Description purchasedCurrency={purchasedCurrency} paymentCurrency={paymentCurrency} />
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
