import { string, func} from "prop-types"

export default function InputForm( {label,
                                    type,
                                    id,
                                    name,
                                    placeholder,
                                    value,
                                    pattern,
                                    onChange:handleInputForm
                                }) {
  return (
    <>
    {label && <label htmlFor={name}> {label}</label>}
  <input type={type}
         id={id}
         name={name}
         placeholder={placeholder}
         value={value}
         pattern={pattern}
         onChange={handleInputForm()}
         className='text-sm p-2 rounded-xl'
   />
    </>
  )
}

InputForm.propTypes = {
    type : string.isRequired,
    label: string,
    id: string.isRequired,
    name: string.isRequired,
    placeholder: string,
    value: string.isRequired,
    pattern: string,
    onChange: func.isRequired

}