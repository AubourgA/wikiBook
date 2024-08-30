
import { columnsBookCopies, createEditAction } from '../../../../Constants'
import Button from '../../../ui/Forms/Button'
import CustomTable from '../../../ui/Table/CustomTable'
import { useNavigate } from 'react-router-dom'

export default function BookCopiesInventory({data, id}) {

  const navigate = useNavigate()

  const handleAddCopy = () => {
    navigate(`/Dashboard/Books/Detail/${id}/New`);
  }
const handleEdit = () =>{
   
}
  const actions = createEditAction(handleEdit);
 
  return (
    <section className='bg-light p-4'>
        <Button title="Nouveau" category='forms' onButtonClick={handleAddCopy} />
        <CustomTable data={data} columns={columnsBookCopies} actions={actions} />
    </section>
  )
}

