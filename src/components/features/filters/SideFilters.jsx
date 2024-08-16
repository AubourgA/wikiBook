import { IoIosArrowDown } from "react-icons/io";
import { sideFilters } from "../../../Constants";
import InputText from "../../ui/Forms/InputText";
import { object, func, string } from "prop-types";

export default function SideFilters({
  selectedFilter,
  values,
  onFilterClick: handleFilterClick,
  onInputClick: handleInputClick,
  onFilterChange: handleInputFilter,
}) {
  return (
    <>
      {sideFilters.map(({ id, filter, traduction, icon: Icon }) => (
        <div
          key={id}
          onClick={() => handleFilterClick(traduction)}
          className="bg-primary50 text-dark p-2 rounded cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <p className="text-sm md:text-md">{filter}</p>
            {selectedFilter === traduction ? <IoIosArrowDown /> : <Icon />}
          </div>
          <div>
            {selectedFilter === traduction && (
              <InputText
                name={traduction}
                values={values[traduction] || ""}
                onChangeFilter={handleInputFilter}
                onInputClick={handleInputClick}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

SideFilters.propTypes = {
  selectedFilter: string,
  values: object.isRequired,
  onFilterClick: func.isRequired,
  onInputClick: func.isRequired,
  onFilterChange: func.isRequired,
};
