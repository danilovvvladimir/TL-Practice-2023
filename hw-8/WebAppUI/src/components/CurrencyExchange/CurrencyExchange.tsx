import { FC, ChangeEvent, useState, useEffect } from "react";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import Description from "../Description/Description";
import "./CurrencyExchange.css";
import { Currency, CurrencyAmount } from "../../types/currency";
import { getAllCurrencies } from "../../utils/fetchData";

const CurrencyExchange: FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const [purchasedCurrency, setPurchasedCurrency] = useState<CurrencyAmount>({ quantity: 1, code: "rub" });
  const [paymentCurrency, setPaymentCurrency] = useState<CurrencyAmount>({ quantity: 1, code: "yen" });

  const [coefficient, setCoefficient] = useState<number>(1.2);

  const handlePurchasedCurrencyChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      const purchasedCurrencyType = event.target.value;

      setPurchasedCurrency({ ...purchasedCurrency, code: purchasedCurrencyType });
    } else {
      const purchasedCurrencyQuantity = parseFloat(event.target.value);

      setPurchasedCurrency({
        ...purchasedCurrency,
        quantity: purchasedCurrencyQuantity > 0 ? purchasedCurrencyQuantity : 1,
      });

      setPaymentCurrency({
        ...paymentCurrency,
        quantity: purchasedCurrencyQuantity * coefficient > 0 ? purchasedCurrencyQuantity * coefficient : coefficient,
      });
    }
  };

  const handlePaymentCurrencyChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      const paymentCurrencyType = event.target.value;

      setPaymentCurrency({ ...paymentCurrency, code: paymentCurrencyType });
    } else {
      const paymentCurrencyQuantity = parseFloat(event.target.value);
      console.log("quanitty change", paymentCurrencyQuantity);

      setPaymentCurrency({
        ...paymentCurrency,
        quantity: paymentCurrencyQuantity > 0 ? paymentCurrencyQuantity : 1,
      });

      setPurchasedCurrency({
        ...purchasedCurrency,
        quantity: paymentCurrencyQuantity / coefficient > 0 ? paymentCurrencyQuantity / coefficient : 1 / coefficient,
      });
    }
  };

  useEffect(() => {
    const fetchAllCurrencies = async () => {
      const data = await getAllCurrencies();

      setCurrencies(data);
    };

    fetchAllCurrencies();

    setPurchasedCurrency({ ...purchasedCurrency, code: currencies.length > 0 ? currencies[0].code : "ERROR" });
    setPaymentCurrency({ ...paymentCurrency, code: currencies.length > 1 ? currencies[1].code : "ERROR" });

    // setPaymentCurrency({ ...paymentCurrency, quantity: purchasedCurrency.quantity * coefficient });
  }, []);

  console.log(currencies);

  return (
    <section className="currency-exchange">
      <div className="container">
        <div className="currency-exchange__wrapper">
          <div className="currency-exchange__header">
            <div className="currency-exchange__purchased">1 Российский рубль равно</div>
            <div className="currency-exchange__payment">0,011 Доллар США</div>
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

          <Description buttonTitle={`${purchasedCurrency.code}/${paymentCurrency.code}: подробнее`} />
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
