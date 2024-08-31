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
export default function AdminLoans() {

  const [search, setSearch] = useState("");
  const { datas, loading } = useSelector((state)=> state.loans);
 const [isSelected, setIsSelected] = useState(true)

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
  
  
  const handleEdit = () => {}

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

</section>

  )
}

