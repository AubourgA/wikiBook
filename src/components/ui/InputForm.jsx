import { string, func} from "prop-types"

export default function InputForm( {type,
                                    id,
                                    name,
                                    placeholder,
                                    value,
                                    pattern,
                                    onChange:handleInputForm
                                }) {
  return (
  <input type={type}
         id={id}
         name={name}
         placeholder={placeholder}
         value={value}
         pattern={pattern}
         onChange={handleInputForm()}
         className='text-sm p-2 rounded-xl'
   />
  )
}

InputForm.propTypes = {
    type : string.isRequired,
    id: string.isRequired,
    name: string.isRequired,
    placeholder: string,
    value: string.isRequired,
    pattern: string,
    onChange: func.isRequired

}