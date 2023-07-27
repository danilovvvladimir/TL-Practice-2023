import { FC, useContext } from "react";

import "./FilterTabs.css";
import { FilterContext } from "../../context/context";
import Button from "../UI/Button/Button";

interface FilterTabsProps {
  getCurrenciesFromTabs: (id: string) => void;
  clearFilters: () => void;
}

const FilterTabs: FC<FilterTabsProps> = ({ getCurrenciesFromTabs, clearFilters }) => {
  const { filters } = useContext(FilterContext);

  return (
    <section className="filter-tabs">
      <div className="container">
        <div className="filter-tabs__wrapper">
          {filters.length > 0 ? (
            <>
              {filters.map(filter => (
                <Button className="filter-tabs__tab" key={filter.id} onClick={() => getCurrenciesFromTabs(filter.id)}>
                  {filter.paymentCurrency.code} / {filter.purchasedCurrency.code}
                </Button>
              ))}
              <Button className="filter-tabs__tab filter-tabs__tab--clear" onClick={() => clearFilters()}>
                Clear Filters
              </Button>
            </>
          ) : (
            <div className="filter-tabs__empty">You haven't added any filters yet...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterTabs;
