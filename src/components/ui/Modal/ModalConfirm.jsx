import Button from '../Forms/Button';
import Title from '../Title';


export default function ModalConfirm( {title, message, onButConfirm: handleDelete, onButCancel : handleClose}) {
    

  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-600/50'>
        <div onClick={e => e.stopPropagation()} className='max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]'>

                <Title level={3} text1={title} custom1='py-3 border-b-2'/>
                 <p className='py-4 border-b-2'>{message}</p>
                <div className='flex justify-end gap-2'>
                    <Button type="button" title="Confirmer" onButtonClick={ handleDelete} category='confirm'/>
                    <Button type="button" title="Annuler" onButtonClick={ handleClose} category='danger'/>

                </div>
        </div>
       
    </div>
  )
}
