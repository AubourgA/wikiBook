import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect} from "react"
import Title from '../../components/ui/Title'
import {  getData } from "../../store/authorSlice";
import { useDebounce } from "../../hooks/useDebounce";
import SearchBar from '../../components/features/filters/SearchBar'
import Button from '../../components/ui/Forms/Button'
import CustomTable from "../../components/ui/Table/CustomTable";
import { IoMdAddCircle } from "react-icons/io";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error/Error";
import { useNavigate } from "react-router-dom";
import {columnsAuthors, createActions, API_ENDPOINTS, PAGINATION_BUTTONS} from "../../Constants";
import { createPortal } from 'react-dom';
import ModalConfirm from '../../components/ui/Modal/ModalConfirm';
import { deleteEntity } from '../../api';
import Pagination from '../../components/ui/Table/Pagination';


export default function AdminAuhors() {
    const [search, setSearch] = useState("");
    const [selectedAuthorId, setSelectedAutorId] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch();
    const debouncedSearch = useDebounce(search, 500);
    const { datas, loading, error, pagination } = useSelector(
        (state) => state.authors
      );

    const navigate = useNavigate();
     
    useEffect(() => {
        dispatch(
          getData({ endpoint: API_ENDPOINTS.AUTHORS, search: debouncedSearch, entityType: "Authors" })
        );
      }, [dispatch, debouncedSearch]);


      const handleChangeSearch = () => (e) => setSearch(e.target.value);

      const handleCreateAuthor = () => navigate("/Dashboard/Authors/New");
      const handleWatch = ()=> {}

      const handleUpdate = (e) => navigate(`/Dashboard/Authors/Update/${e.id}`);

      const handleCallDeleteModal = (book) =>  {
        setShowModal(true)
        setSelectedAutorId(book.id)
      };
      const handleCloseModal = () => setShowModal(() => !showModal)

      const handleDeleteItem = async () => {
        try {
          
          await deleteEntity(selectedAuthorId, API_ENDPOINTS.AUTHORS);
          dispatch(getData({ endpoint: API_ENDPOINTS.AUTHORS, search: debouncedSearch, entityType: "Author" }));
          setShowModal(false);
        } catch (err) {
          setShowModal(false)
          console.error("Failed to delete book:", err);
        }
      }

      const handlePaginationClick = async (url) => {
        dispatch(getData({ endpoint: url, search: debouncedSearch, entityType: "Authors" }));
      };
     
      const actions = createActions(handleWatch, handleUpdate, handleCallDeleteModal);

    if (loading) return <Loader />;

    if (error) return <Error title="Oups..." message="Un problème est survenue. Re-essayé ultérieurement" />;
  
    if (!datas || !datas["hydra:member"])
      return (
        <Error
          title="Données manquantes"
          message="Impossible de récupérer la liste des livres."
        />
      );

 
  return (
    <>

        <section className="bg-blue-100 p-4 rounded my-2">
            <div className="flex justify-between items-center border-light border-b-2">
            <Title level={2} text1="Liste des auteurs" />
            <SearchBar
                id="searchBar"
                type="text"
                value={search}
                name="searchBar"
                placeholder="Votre recherche..."
                pattern={""}
                onChange={handleChangeSearch}
              />
            </div>
            <Button
              type="button"
              title="Ajouter un auteur"
              category="forms"
              icon={IoMdAddCircle}
              onButtonClick={handleCreateAuthor}
              custom="items-center flex-row-reverse gap-2 mb-4"
            />
              <CustomTable
              data={datas["hydra:member"]}
              columns={columnsAuthors}
              actions={actions}
            />
               <Pagination
          paginationButtons={PAGINATION_BUTTONS.map(({ key, title }) => ({
            key,
            title,
          }))}
          onPageChange={handlePaginationClick}
          page={pagination}
        />
        </section>
        {showModal && 
      createPortal(<ModalConfirm  title="SUPPRESION D'UN OUVRAGE" 
                                  message="Voulez vous supprimer cette article ?"
                                  onButConfirm={ handleDeleteItem}
                                  onButCancel={ handleCloseModal} />,
        document.body
      ) }
    </>

    
  )
}

