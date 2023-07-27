import { FC, useContext } from "react";

import "./FilterTabs.css";
import { FilterContext } from "../../context/context";
import Button from "../UI/Button/Button";

const FilterTabs: FC = () => {
  const { filters } = useContext(FilterContext);

  return (
    <section className="filter-tabs">
      <div className="container">
        <div className="filter-tabs__wrapper">
          {filters.length > 0 ? (
            filters.map(filter => (
              <Button className="filter-tabs__tab" key={filter.id}>
                {filter.paymentCurrencyCode} / {filter.purchasedCurrencyCode}
              </Button>
            ))
          ) : (
            <div className="filter-tabs__empty">You haven't added any filters yet...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterTabs;
