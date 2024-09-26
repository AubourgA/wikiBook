import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import { API_ENDPOINTS, columnsBookCopies, createEditAction } from '../../../../Constants'
import Button from '../../../ui/Forms/Button'
import CustomTable from '../../../ui/Table/CustomTable'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import ModalEditField from '../../../ui/Modal/ModalEditField'
import { fetchAllGenericData, fetchEntity, updateEntity } from '../../../../api'
import { filterDatasWithParameter } from '../../../../utils/filteredDatas'
import Error from '../../../ui/Error/Error'


export default function BookCopiesInventory({data, id}) {

  const [formData, setFormData]= useState({})
  const [bookCopyId, setBookCopyId] = useState(null)
  const [showModal, setShowModal]= useState(false)
  const [status, setStatus] = useState([])
  const [error, setError] = useState("")

  const navigate = useNavigate()


  useEffect( ()=> {
    const fetchListStatus = async () => {
      await fetchAllGenericData(API_ENDPOINTS.BASE, (endpoint)=> fetchEntity(endpoint ? endpoint : API_ENDPOINTS.STATUS), setStatus, "Erreur lors du chargement des nationalité");
    }
    fetchListStatus()
  },[])


  const filtredStatus = filterDatasWithParameter(status, "type", "Emprunté")

  const handleAddCopy = () => navigate(`/Dashboard/Books/Detail/${id}/New`);

  const handleEdit = (bookCopy) =>{
    setBookCopyId(bookCopy.id)
    setShowModal(!showModal)
  }

  const handleChange = () => e => {
    const { name,  value  } = e.target;
    setFormData((prev) => ({...prev,[name]: value }));
  }

  const handleSubmit =async (e)=>{
          e.preventDefault()

          const currentBookCopy = data.find(bookCopy => bookCopy.id === bookCopyId)
          console.log(currentBookCopy)

        if( currentBookCopy?.status.type === "Emprunté") {
          setError("Impossible de changer le status : le livre est acutellement emprunté")
          setShowModal(false)
          return
        }

       await updateEntity(bookCopyId, API_ENDPOINTS.BOOKCOPIES, formData)
        setShowModal(false)
  }

  const actions = createEditAction(handleEdit);
 
  return (
    <>
      <section className='bg-light p-4'>
          <Button title="Nouveau" type="button" category='forms' onButtonClick={handleAddCopy} />
          {error && <Error title="ERROR" message={error}/>}
          <CustomTable data={data} columns={columnsBookCopies} actions={actions} />
      </section>
      {showModal &&
        createPortal(
         <ModalEditField title="Modifier le status de l'exemplaire"
                          value={formData.status}
                          message = "Choisiez le status à modifier :"
                          options={filtredStatus}
                          onSelect = {handleChange}
                         onSubmitForm = {handleSubmit}
                         onButtonCancel={ ()=>setShowModal(false)}/>,
                         document.body )}
    </>
  )
}


BookCopiesInventory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      status: PropTypes.shape({
        type: PropTypes.string.isRequired, 
      }).isRequired, 
    })
  ).isRequired, 
  id: PropTypes.number.isRequired, 
};