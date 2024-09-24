import Button from '../Forms/Button';
import Title from '../Title';
import SelectForm from '../Forms/SelectForm'


export default function ModalEditField( {title, options, message, value="", onSubmitForm: handleSubmit, onSelect : handleChange, onButtonCancel : handleClose }) {

  
 
    return (
    <form onSubmit={handleSubmit} className='fixed z-10 inset-0 flex items-center justify-center bg-gray-600/50'>
         <div onClick={e => e.stopPropagation()} className='max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]'>
                <Title level={3} text1={title} custom1='py-3 border-b-2' />
                <div className='py-4 border-b-2'>
                    <p >{message}</p>
                    <SelectForm name="status" value={value} onChange={handleChange} options={options} labelKey='type'/>
                </div>
                <div className='flex justify-end gap-2'>
                    <Button type="submit" title="Confirmer"  category='confirm'/>
                    <Button type="button" title="Annuler" onButtonClick={ handleClose} category='danger'/>

                </div>

        </div>
     </form>
  )
}

