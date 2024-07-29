import { IoIosArrowDown } from 'react-icons/io';
import {  sideFilters } from '../../lib/constants';
import InputText from '../ui/InputText';


export default function SideFilters( {selectedFilter,
                                      values,
                                       onFilterClick: handleFilterClick,
                                        onInputClick : handleInputClick,
                                        onFilterChange: handleInputFilter}) {

  return (
    <>
     {sideFilters.map( ({id,filter, traduction , icon : Icon}) => (
        <div key={id} 
             onClick={()=> handleFilterClick(traduction)}
             className='bg-primary50 text-dark p-2 rounded cursor-pointer'>
                <div className='flex justify-between items-center'>
                        <p className='text-sm md:text-md'>{filter}</p>
                        {selectedFilter === traduction ? <IoIosArrowDown /> : <Icon />}
                </div>
                <div>
                {selectedFilter === traduction && (
                    
                    <InputText name={traduction} 
                               values={values[traduction]}
                               onChangeFilter={handleInputFilter}
                               onInputClick={handleInputClick} />
                 )
                 }
                </div>
        </div>
      
    ))}
    </>
  )
}

