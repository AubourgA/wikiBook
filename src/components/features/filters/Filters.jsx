import { useState } from "react";
import { object, func } from "prop-types";


import { TbFilterSearch } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

import SideFilters from "./SideFilters";
import Button from "../../ui/Forms/Button";

function Filters({ values, onFilterChange, onApplyFilters, onResetFilters }) {
  const [selectedFilter, setSelectedFilter] = useState();

  const handleFilterClick = (filter) => setSelectedFilter(selectedFilter === filter ? null : filter);

  const handleInputClick = (e) => e.stopPropagation();

  const handleInputFilter = () => (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

 
  return (
    <aside className="flex flex-col gap-4">
      <div className="flex justify-between items-center bg-dark text-light p-2 rounded">
        <p className="text-sm md:text-md">Filtres</p>
        <TbFilterSearch />
      </div>

      <SideFilters  selectedFilter={selectedFilter}
                    values={values}
                    onFilterClick={handleFilterClick}
                    onInputClick={handleInputClick}
                    onFilterChange={handleInputFilter} />

      <Button type="button"
              title="Reset"
              category='filter-secondary'
              icon={GrPowerReset}
              onButtonClick={onResetFilters}/>

      <Button  type="button"
              title="Appliquer"
              category='filter-primary'
              icon={CiSearch}
              onButtonClick={onApplyFilters} />
    </aside>
  );
}

export default Filters;

Filters.propTypes = {
  values : object,
  filters: object,
  onFilterChange: func,
  onApplyFilters: func,
  onResetFilters: func,
};
