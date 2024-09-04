import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import CustomTable from "../../../components/ui/Table/CustomTable";
import Title from "../../../components/ui/Title";
import SearchBar from "../../../components/features/filters/SearchBar";
import Button from "../../../components/ui/Forms/Button";
import { IoMdAddCircle } from "react-icons/io";
import Pagination from "../../../components/ui/Table/Pagination";
import Loader from "../../../components/ui/Loader";
import Error from "../../../components/ui/Error/Error";
import { useNavigate } from "react-router-dom";
import ModalConfirm from "../../../components/ui/Modal/ModalConfirm";
import { createPortal } from "react-dom";
// import { deleteEntity } from "../../../api";
import { createActions, PAGINATION_BUTTONS } from '../../../Constants';
import {useDeleteEntity} from '../../../hooks/useDeleteEntity'

export default function AdminEntity({
  entityType, //added this in getSearchParams function for searching feature
  sliceSelector, // Le sélecteur pour accéder au slice dans le store Redux
  columns, // Les colonnes pour le tableau
  apiEndpoint, // Le point de terminaison API pour l'entité
  createPath, // Le chemin pour créer une nouvelle entité
  updatePath, // Le chemin pour mettre à jour une entité
  viewPath, // chemin pour voir une entité
  entityName = "article", // Le nom de l'entité pour les messages, par défaut "article"
  getFetchData
}) {
  const [search, setSearch] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [selectedEntityId, setSelectedEntityId] = useState(null);
  // const [deleteError, setDeleteError] = useState(null);

  const dispatch = useDispatch();
  const { datas, loading, error, pagination } = useSelector(sliceSelector);
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();
 
  useEffect(() => {
    dispatch( getFetchData({ endpoint: apiEndpoint, search: debouncedSearch, entityType: entityType,
      })
    );
  
  }, [dispatch, debouncedSearch, apiEndpoint, entityType, getFetchData]);

  const handleChangeSearch = () => (e) => setSearch(e.target.value);

  const handlePaginationClick = async (url) => {
    dispatch(
        getFetchData({
        endpoint: url,
        search: debouncedSearch,
        entityType: entityType,
      })
    );
  };




  

  const handleCreateEntity = () => navigate(createPath);
  const handleUpdate = (e) => navigate(`${updatePath}/${e.id}`);
 const handleRead = (e) => navigate(`${viewPath}/${e.id}`)
  // const handleCallDeleteModal = (entity) => {
  //   setShowModal(true);
  //   setSelectedEntityId(entity.id);
  // };

  // const handleDeleteItem = async () => {
  //   try {
  //     await deleteEntity(selectedEntityId, apiEndpoint);
  //     dispatch(
  //       getFetchData({
  //         endpoint: apiEndpoint,
  //         search: debouncedSearch,
  //         entityType: entityType,
  //       })
  //     );
  //     setShowModal(false);
  //     setDeleteError(null); // Réinitialise l'erreur en cas de succès
  //   } catch (err) {
  //     setShowModal(false);
  //     setDeleteError("Echec de suppression, cette entité est liée à d'autres données.");
  //     console.error("Failed to delete entity:", err);
  //   }
  // };
 
 
  // const handleCloseModal = () => setShowModal(false);

  const { 
    showModal, 
    deleteError, 
    handleCallDeleteModal, 
    handleDeleteItem, 
    handleCloseModal 
  } = useDeleteEntity(apiEndpoint, getFetchData, debouncedSearch, entityType);

  const actions = createActions(handleRead, handleUpdate, handleCallDeleteModal);
 
  if (loading) return <Loader />;

  if (error) return <Error title="Oups..." message="Un problème est survenu. Réessayez ultérieurement." />;

  if (!datas || !datas["hydra:member"])
    return <Error title="Données manquantes" message="Impossible de récupérer la liste des entités." />;

  return (
    <div>
      <section className="bg-blue-100 p-4 rounded my-2">
        <div className="flex justify-between items-center border-light border-b-2">
          <Title level={2} text1={`Liste des ${entityType.toLowerCase()}`} />
          <SearchBar  id="searchBar"
                      type="text"
                      value={search}
                      name="searchBar"
                      placeholder="Votre recherche..."
                      pattern={""}
                      onChange={handleChangeSearch} />
        </div>
        {deleteError && <Error title="Erreur :" message={deleteError} />}

        <Button type="button"
                title={`Ajouter un ${entityName}`}
                category="forms"
                icon={IoMdAddCircle}
                onButtonClick={handleCreateEntity}
                custom="items-center flex-row-reverse gap-2 mb-4" />

        <CustomTable  data={datas["hydra:member"]}
                      columns={columns}
                      actions={actions} />

        {datas["hydra:view"] && 
          <Pagination   paginationButtons={PAGINATION_BUTTONS.map(({ key, title }) => ({key, title, }))}
                        onPageChange={handlePaginationClick}
                        page={pagination} />
        }
      </section>
      {showModal &&
        createPortal(
          <ModalConfirm  title={`SUPPRESION D'UN ${entityName.toUpperCase()}`}
                         message={`Voulez-vous supprimer cet ${entityName}?`}
                         onButConfirm={handleDeleteItem}
                         onButCancel={handleCloseModal} />,
                         document.body )}
  </div>
 );
}
