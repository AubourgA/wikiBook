import { func, string } from 'prop-types';

export default function InputText( {name, 
                                    values="",
                                    onChangeFilter:handleInputFilter,
                                    onInputClick: handleInputClick}) {
  
  return (

    <input
    type="text"
    name={name}
    value={values}
    onChange={handleInputFilter()}
    onClick={handleInputClick}
    className="p-1 border rounded w-full text-sm mt-2 transition"
  />
  )
}

InputText.propTypes = {
  name : string.isRequired,
  values : string,
  onChangeFilter : func.isRequired,
  onInputClick : func.isRequired
}
