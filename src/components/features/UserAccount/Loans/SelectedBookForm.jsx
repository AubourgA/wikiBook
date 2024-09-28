import { useState } from 'react';
import Button from '../../../ui/Forms/Button'
import SelectForm from '../../../ui/Forms/SelectForm'
import Image from '../../../ui/Image';

export default function SelectedBookForm( {item, onSubmitBooking   } ) {


const [formData, setFormData] = useState({langue:""})

const options = item.bookCopies
  .filter(copy => copy.status?.type === "En Stock")  
  .map(copy => ({
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

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitBooking(item.id, formData)
  }

  return (
    <div className='shadow-sm bg-slate-50  rounded p-2 my-4'>

            <form onSubmit={handleSubmit} className='flex items-center justify-between gap-2'>
                <div className='flex gap-2'>
                        <Image img="https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg"/>
                        <div>   
                            <p className='font-bold'>{item.title}</p>
                            <SelectForm key={item.id} 
                                        name="langue" 
                                        id="langue" 
                                        onChange={handleChange} 
                                        options={options} 
                                        value={formData.langue} 
                                        valueKey="value" 
                                        labelKey="label"/>
                        </div>
                </div>
                <Button title="VALIDER ?" category="validate" custom="text-sm"  type='submit'  />
            </form>
    </div>


  )
}

