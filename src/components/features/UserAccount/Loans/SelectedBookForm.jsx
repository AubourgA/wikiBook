import { useState } from 'react';
import Button from '../../../ui/Forms/Button'
import SelectForm from '../../../ui/Forms/SelectForm'

export default function SelectedBookForm( {item, onButtonClick : handleClick } ) {


const [formData, setFormData] = useState({langue:""})


const options = item.bookCopies.map(copy => ({
    value: copy?.["@id"],
    label: copy.Language?.name,
  }));

  const handleChange = () => (e) =>{
    const { name, value } = e.target;
   
    setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
  }


  return (
    <div className='shadow shadow-dark rounded p-2 my-4'>

            <form className='flex items-center justify-between'>
                <div>
                    <p className='font-bold'>{item.title}</p>
                    <SelectForm name="langue" id="langue" onChange={handleChange} options={options} value={formData.langue} valueKeyKey="value" labelKey="label"/>
                </div>
                <Button title="EMPRUNTER" category="nav-user" custom="text-sm"  type='button' onButtonClick={()=> handleClick(item.id)} />
            </form>
    </div>


  )
}

