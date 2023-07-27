import { FC } from "react";
import "./CurrencyChart.css";
import { CHART_BUTTON_LABELS, DOTS_PER_MINUTE } from "../../constants/constants";
import Button from "../UI/Button/Button";
import AreaChart from "../UI/AreaChart/AreaChart";
import { CurrencyCoefficient } from "../../types/currency";

interface CurrencyChartProps {
  setCurrentTabIndex: (value: number) => void;
  currentTabIndex: number;
  currentCoefficients: CurrencyCoefficient[];
}

const CurrencyChart: FC<CurrencyChartProps> = ({ setCurrentTabIndex, currentTabIndex, currentCoefficients }) => {
  const handleChangeChartsCoefficients = (value: number) => {
    setCurrentTabIndex(DOTS_PER_MINUTE - value - 1);
  };

  return (
    <div className="currency-exchange__content-chart">
      <div className="currency-exchange__chart-tabs">
        {CHART_BUTTON_LABELS.map((value, index) => {
          const finalClassName =
            index === currentTabIndex ? "currency-exchange__chart-button active" : "currency-exchange__chart-button";
          return (
            <Button
              key={value}
              onClick={() => handleChangeChartsCoefficients(value)}
              data-chart-value={value}
              className={finalClassName}
            >
              {value} MIN
            </Button>
          );
        })}
      </div>
      <AreaChart
        dataSet={currentCoefficients.map(coef => coef.price)}
        labels={currentCoefficients.map(coef => new Date(coef.dateTime).toUTCString())}
      />
    </div>
  );
};

export default CurrencyChart;
