

export default function InputText( {name, 
                                    values,
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
