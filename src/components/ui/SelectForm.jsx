import { string, func, arrayOf, shape, number } from 'prop-types';

export default function SelectForm( {label ="", 
                                    name,
                                     value="",
                                      onChange:handleChange,
                                      options=[],
                                      labelKey = "name", 
                                      valueKey = "@id" }) {

    return (
    <>
        <label htmlFor={name}>{label}</label>
        <select name={name} 
                id={name}
                onChange={handleChange()}
                >
             <option value="">{value}</option>
             {Array.isArray(options) && options.map((option) => (
          <option key={option[valueKey]} value={option[valueKey]}>
          {option[labelKey]}
          </option>
        ))}
        </select>
    </>
  )
}

SelectForm.propTypes = {
    label: string, 
    name: string.isRequired, 
    value: string, 
    onChange: func.isRequired, 
    options: arrayOf(shape({ 
        id: number.isRequired, 
        name: string.isRequired 
    })).isRequired, 
    labelKey: string, 
    valueKey: number
};

