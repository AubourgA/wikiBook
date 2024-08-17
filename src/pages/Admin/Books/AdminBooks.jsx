import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../../store/bookSlice";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import CustomTable from "../../../components/ui/Table/CustomTable";
import {
  columnsBooks,
  createActionsBooks,
  PAGINATION_BUTTONS,
  API_ENDPOINTS} from "../../../Constants";
import Title from "../../../components/ui/Title";
import SearchBar from "../../../components/features/filters/SearchBar";
import Button from "../../../components/ui/Forms/Button";
import { IoMdAddCircle } from "react-icons/io";
import Pagination from "../../../components/ui/Table/Pagination";
import Loader from "../../../components/ui/Loader";
import Error from "../../../components/ui/Error/Error";
import { useNavigate } from "react-router-dom";
import ModalConfirm from '../../../components/ui/Modal/ModalConfirm';
import { createPortal } from 'react-dom';
import { deleteBook } from '../../../api'
// import BookForm from './Forms/BookForm'

export default function AdminBooks() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false)
  const [selectedBookId, setSelectedBookId] = useState(null)
  const dispatch = useDispatch();
  const { datas, loading, error, pagination } = useSelector(
    (state) => state.books
  );
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getData({ endpoint: API_ENDPOINTS.BOOKS, search: debouncedSearch })
    );
  }, [dispatch, debouncedSearch]);

  if (loading) return <Loader />;

  if (error) return <Error title="Oups..." message={error} />;

  if (!datas || !datas["hydra:member"])
    return (
      <Error
        title="Données manquantes"
        message="Impossible de récupérer la liste des livres."
      />
    );

  const handleChangeSearch = () => (e) => setSearch(e.target.value);

  const handlePaginationClick = async (url) => {
    dispatch(getData({ endpoint: url, search: debouncedSearch }));
  };

  const handleCreateBook = () => navigate("/Dashboard/Books/New");
  const handleUpdate = (e) => navigate(`/Dashboard/Books/Update/${e.id}`);

  const handleCallDeleteModal = (book) =>  {
    setShowModal(true)
    setSelectedBookId(book.id)
  };

  const handleDeleteItem = async () => {
    try {
      await deleteBook(selectedBookId); // Utilise l'ID du livre pour le supprimer
      dispatch(getData({ endpoint: API_ENDPOINTS.BOOKS, search: debouncedSearch })); // Rafraîchit la liste des livres après suppression
      setShowModal(false);
    } catch (error) {
      console.error("Failed to delete book:", error);
      // Gérer l'erreur (par exemple, afficher un message d'erreur)
    }
  }
  const handleCloseModal = () => {
    setShowModal(() => !showModal)
  }
  const handleWatch = (e) => console.log(e);

  const actionsBooks = createActionsBooks(
    handleWatch,
    handleUpdate,
    handleCallDeleteModal
  );

  return (
    <div>
      <section className="bg-blue-100 p-4 rounded my-2">
        <div className="flex justify-between items-center border-light border-b-2">
          <Title level={2} text1="Liste des ouvrages" />
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
          title="Ajouter un ouvrage"
          category="forms"
          icon={IoMdAddCircle}
          onButtonClick={handleCreateBook}
          custom="items-center flex-row-reverse gap-2 mb-4"
        />

        <CustomTable
          data={datas["hydra:member"]}
          columns={columnsBooks}
          actions={actionsBooks}
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
    </div>
  );
}
