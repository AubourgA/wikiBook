import { string, func, arrayOf, shape } from 'prop-types';

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
                value={value}
                className='text-sm p-2 rounded-xl'
                >
                  
             <option value="">{value.length > 0 ? value.name : "Choissiez votre item"}</option>
             {Array.isArray(options) && options.map((option) => (
              
          <option key={option[valueKey]} 
                  value={option[valueKey]}>
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
    options: arrayOf(
      shape({
        value: string.isRequired, // On valide que chaque option a une clé `value`
        label: string.isRequired, // et une clé `label`
      })
  ).isRequired, 
    labelKey: string, 
    valueKey: string
};

