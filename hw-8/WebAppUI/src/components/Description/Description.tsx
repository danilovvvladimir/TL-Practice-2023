import { FC, useState } from "react";
import Button from "../UI/Button/Button";
import "./Description.css";
import { Currency } from "../../types/currency";

interface DescriptionProps {
  paymentCurrency: Currency;
  purchasedCurrency: Currency;
}

const Description: FC<DescriptionProps> = ({ paymentCurrency, purchasedCurrency }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(isDescriptionVisible => !isDescriptionVisible);
  };

  return (
    <div className="currency-exchange__description description">
      <Button className="description__button" onClick={toggleDescriptionVisibility}>
        {paymentCurrency.code}/{purchasedCurrency.code}: about
        <span className="description__arrow">
          {isDescriptionVisible ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-3.49691e-07 8L1.41 9.41L7 3.83L7 16L9 16L9 3.83L14.59 9.41L16 8L8 -3.49691e-07L-3.49691e-07 8Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8L14.59 6.59L9 12.17L9 -3.0598e-07L7 -3.93402e-07L7 12.17L1.41 6.59L-3.49691e-07 8L8 16L16 8Z"
                fill="black"
              />
            </svg>
          )}
        </span>
      </Button>

      {isDescriptionVisible && (
        <div className="description__content">
          <div className="description__content-block">
            <h3 className="description__content-header">
              {paymentCurrency.name} - {paymentCurrency.code} - {paymentCurrency.symbol}
            </h3>
            <p className="description__content-text">{paymentCurrency.description}</p>
          </div>
          <div className="description__content-block">
            <h3 className="description__content-header">
              {purchasedCurrency.name} - {purchasedCurrency.code} - {purchasedCurrency.symbol}
            </h3>
            <p className="description__content-text">{purchasedCurrency.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
