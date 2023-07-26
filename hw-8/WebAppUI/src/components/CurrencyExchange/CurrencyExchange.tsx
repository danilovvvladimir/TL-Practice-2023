// ==> Libs imports <===
import { FC, ChangeEvent, useState, useEffect } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./CurrencyExchange.css";
import Button from "../UI/Button/Button";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { Currency } from "../../types/currency";

const CurrencyExchange: FC = () => {
  const [purchasedCurrency, setPurchasedCurrency] = useState<Currency>({ quantity: 1, type: "rub" });
  const [paymentCurrency, setPaymentCurrency] = useState<Currency>({ quantity: 1, type: "yen" });

  const [coefficient, setCoefficient] = useState<number>(1.2);

  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);

  const handlePurchasedCurrencyChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      const purchasedCurrencyType = event.target.value;

      setPurchasedCurrency({ ...purchasedCurrency, type: purchasedCurrencyType });
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

      setPaymentCurrency({ ...paymentCurrency, type: paymentCurrencyType });
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
    setPaymentCurrency({ ...paymentCurrency, quantity: purchasedCurrency.quantity * coefficient });
  }, []);

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
                  options={["rub", "yen"]}
                />

                <CurrencySelect
                  purchasedCurrencyValue={paymentCurrency}
                  onPurchasedCurrencyChange={handlePaymentCurrencyChange}
                  options={["rub", "yen"]}
                />
              </div>
            </div>
            <div className="currency-exchange__content-graphs"></div>
          </div>

          <div className="currency-exchange__description description">
            <Button
              className="currency-exchange__description-btn"
              onClick={() => setIsDescriptionVisible(isDescriptionVisible => !isDescriptionVisible)}
            >
              {purchasedCurrency.type}/{paymentCurrency.type}: подробнее
              <span className="currency-exchange__arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8L14.59 6.59L9 12.17L9 -3.0598e-07L7 -3.93402e-07L7 12.17L1.41 6.59L-3.49691e-07 8L8 16L16 8Z"
                    fill="black"
                  />
                </svg>
              </span>
            </Button>

            {isDescriptionVisible && (
              <div className="currency-exchange__description-content description__content">
                <div className="currency-exchange__description-content-header">Japanese yen - YEN - ¥</div>
                <p className="currency-exchange__description-text">
                  Accounting for approximately 2% of all global reserves, the Canadian dollar is the sixth-most held
                  reserve currency in the world, behind the U.S. dollar, euro, yen, sterling, and renminbi. The Canadian
                  dollar is popular with central banks because of Canada's relative economic soundness, the Canadian
                  government's strong sovereign position, and the stability of the country's legal and political
                  systems.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
