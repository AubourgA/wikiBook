import Title from '../../components/ui/Title';
import SearchBar from '../../components/features/filters/SearchBar';

import { getData} from '../../store/loansSlice';
import { API_ENDPOINTS, columnsLoans, createEditAction } from '../../Constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import CustomTable from '../../components/ui/Table/CustomTable';
import Loader from '../../components/ui/Loader';
import InputForm from '../../components/ui/Forms/InputForm';
import Error from '../../components/ui/Error/Error';
import ModalConfirm from '../../components/ui/Modal/ModalConfirm';
import { createPortal } from 'react-dom';
import { updateEntity } from '../../api';
import { formatDateISO } from '../../utils/formalizerDate';
export default function AdminLoans() {

  const [search, setSearch] = useState("");
  const { datas, loading } = useSelector((state)=> state.loans);
 const [isSelected, setIsSelected] = useState(true)
 const [selectedId, setSelectedId] = useState(null)

 const [showModal, setShowModal] = useState(false)
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      endpoint: API_ENDPOINTS.LOANS,
      search: debouncedSearch,
      filter: isSelected ? "ongoing" : "",
    }
    // dispatch( getData({ endpoint: API_ENDPOINTS.LOANS, search: debouncedSearch })  );
    dispatch( getData(params)  );
  
  }, [dispatch, debouncedSearch, isSelected]);
  


const updateDateReturn = () => {
   try {
    updateEntity(selectedId, API_ENDPOINTS.LOANS, {returnDate : formatDateISO(new Date())})
    setShowModal(false)
   } catch(error) {
    console.error('Error update loans:', error.response ? error.response.data : error.message);
   }
}

  const handleEdit = (e) => { 
      setShowModal(true)
      setSelectedId(e.id)
      }

  const handleChangeSearch = () => (e) => setSearch(e.target.value);

  const handleSelectedAction = () => (e) => setIsSelected(e.target.checked)
  
  const action = isSelected ?  createEditAction(handleEdit) : "";


  if (loading) return <Loader />;

  if (!datas || !datas["hydra:member"])
    return <Error title="Données manquantes" message="Impossible de récupérer la liste des entités." />;

  return (
    <section className="bg-blue-100 p-4 rounded my-2">
        <div className="flex justify-between items-center border-light border-b-2">
              <Title level={2} text1="Liste des Emprunts" />
              <SearchBar
                id="searchBar"
                type="text"
                value={search}
                name="searchBar"
                placeholder="Votre recherche..."
                pattern={""}
                onChange={ handleChangeSearch}
              
              />
        </div>
        <div className='flex items-center gap-2 py-4 '>
          
          <InputForm type='checkbox' 
                      onChange={handleSelectedAction}
                      value={isSelected} 
                      name="loans" 
                      id='loans'
                      label="Uniquement les emprunt en cours"/>
          
        </div>
        <CustomTable data={datas['hydra:member']} 
                    columns={columnsLoans} 
                    actions={action}/>

{showModal &&
  createPortal(
    <ModalConfirm  title="Retour d'un emprunt"
                   message="Enregistrer la date du retour du livre pour aujourdhui ?"
                   onButConfirm={updateDateReturn}
                   onButCancel={ ()=>setShowModal(false)} />,
                   document.body )}
    </section>

  )
}

