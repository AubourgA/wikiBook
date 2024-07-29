import { useState } from "react";
import { object, func } from 'prop-types';


// import {sideFilter} from "../../lib/constants";
import { TbFilterSearch } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
// import { IoIosArrowDown } from "react-icons/io";
import SideFilters from './SideFilters';



function Filters( {values, onFilterChange, onApplyFilters, onResetFilters}) {

 const [selectedFilter, setSelectedFilter] = useState();


const handleFilterClick =  (filter)  =>  setSelectedFilter(selectedFilter === filter ? null : filter)
 
const handleInputClick = (e) =>  e.stopPropagation();
   
const handleInputFilter = () => (e)  => {
        const {name, value} = e.target;
       onFilterChange(name,value)
}


  return (
    <aside className="flex flex-col gap-4"> 
    <div className='flex justify-between items-center bg-dark text-light p-2 rounded'>
        <p className='text-sm md:text-md'>Filtres</p>
        <TbFilterSearch />
    </div>

    <SideFilters selectedFilter={selectedFilter}
                 values={values} 
                onFilterClick={handleFilterClick}
                onInputClick={handleInputClick}
                onFilterChange={handleInputFilter}
                />

    
      <button className='flex justify-between items-center border border-secondary p-2 rounded btn-pressed text-secondary text-sm md:text-md'
              onClick={onResetFilters}>
      Reset
      <GrPowerReset />
      </button>

    <button className='flex justify-between items-center bg-secondary p-2 rounded btn-pressed text-light text-sm md:text-md'
            onClick={onApplyFilters}>
      Appliquer
      <CiSearch />
      </button>
  </aside>

  )
}

export default Filters

Filters.propTypes = {
    filters : object,
    onFilterChange : func,
    onApplyFilters : func,
    onResetFilters: func,

}