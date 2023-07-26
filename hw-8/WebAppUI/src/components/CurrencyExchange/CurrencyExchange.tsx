// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./CurrencyExchange.css";
import Button from "../UI/Button/Button";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

const CurrencyExchange: FC = () => {
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
                <CurrencySelect />
                <CurrencySelect />
              </div>
            </div>
            <div className="currency-exchange__content-graphs"></div>
          </div>

          <div className="currency-exchange__description">
            <Button className="currency-exchange__description-btn">
              RUB/USD: подробнее{" "}
              <span className="currency-exchange__arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8L14.59 6.59L9 12.17L9 -3.0598e-07L7 -3.93402e-07L7 12.17L1.41 6.59L-3.49691e-07 8L8 16L16 8Z"
                    fill="black"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
