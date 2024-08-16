import { string, func, oneOfType, number} from "prop-types"

export default function InputForm( {label,
                                    type,
                                    id,
                                    name,
                                    placeholder,
                                    value,
                                    pattern,
                                    onChange:handleInputForm,
                                    customClass=""
                                }) {
  return (
    <>
    {label && <label htmlFor={name}> {label}</label>}
  <input type={type}
         id={id}
         name={name}
         placeholder={placeholder}
        value={type === "checkbox" ? undefined : value} // Pas de valeur pour checkbox, on utilise checked à la place
        checked={type === "checkbox" ? value : undefined} // Utilise checked si c'est une checkbox
         pattern={pattern}
         onChange={handleInputForm()}
         className={`text-sm p-2 rounded-xl ${customClass}`}
        
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
    value: oneOfType([string, number]).isRequired,
    pattern: string,
    onChange: func.isRequired

}