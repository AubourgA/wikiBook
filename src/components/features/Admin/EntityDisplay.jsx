import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import CustomTable from "../../ui/Table/CustomTable";
import Title from "../../ui/Title";
import SearchBar from "../../features/filters/SearchBar";
import Button from "../../ui/Forms/Button";
import { IoMdAddCircle } from "react-icons/io";
import Pagination from "../../ui/Table/Pagination";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error/Error";
import ModalConfirm from "../../ui/Modal/ModalConfirm";
import { deleteEntity } from "../../../api";
import { createActions, PAGINATION_BUTTONS } from '../../../Constants';
import { useEntityManager } from "../../../hooks/useEntityManager";

export default function AdminEntity({
  entityType, // Le type d'entité, par exemple "Books", "Authors", "Genres"
  columns, // Les colonnes pour le tableau
  apiEndpoint, // Le point de terminaison API pour l'entité
  createPath, // Le chemin pour créer une nouvelle entité
  updatePath, // Le chemin pour mettre à jour une entité
  entityName = "article", // Le nom de l'entité pour les messages, par défaut "article"
}) {
  const navigate = useNavigate();
  const {
    datas,
    loading,
    error,
    pagination,
    search,
    deleteError,
    setDeleteError,
    handleChangeSearch,
    handlePaginationClick,
    setSearch,
  } = useEntityManager({ endpoint: apiEndpoint, entityType });

  const [showModal, setShowModal] = useState(false);
  const [selectedEntityId, setSelectedEntityId] = useState(null);

  const handleCreateEntity = () => navigate(createPath);
  const handleUpdate = (e) => navigate(`${updatePath}/${e.id}`);
  const handleRead = () => {};

  const handleCallDeleteModal = (entity) => {
    setShowModal(true);
    setSelectedEntityId(entity.id);
  };

  const handleDeleteItem = async () => {
    try {
      await deleteEntity(selectedEntityId, apiEndpoint);
      setSearch(""); // Clear the search input if desired
      setShowModal(false);
      setDeleteError(null);
    } catch (err) {
      setShowModal(false);
      setDeleteError("Echec de suppression, cette entité est liée à d'autres données.");
      console.error("Failed to delete entity:", err);
    }
  };

  const handleCloseModal = () => setShowModal(false);

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
        {deleteError && <Error title="Erreur :" message={deleteError} />}
        <Button
          type="button"
          title={`Ajouter un ${entityName}`}
          category="forms"
          icon={IoMdAddCircle}
          onButtonClick={handleCreateEntity}
          custom="items-center flex-row-reverse gap-2 mb-4"
        />
        <CustomTable
          data={datas["hydra:member"]}
          columns={columns}
          actions={actions}
        />
        {datas["hydra:view"] && 
        <Pagination
          paginationButtons={PAGINATION_BUTTONS.map(({ key, title }) => ({
            key,
            title,
          }))}
          onPageChange={handlePaginationClick}
          page={pagination}
        />
        }
      </section>
      {showModal &&
        createPortal(
          <ModalConfirm
            title={`SUPPRESION D'UN ${entityName.toUpperCase()}`}
            message={`Voulez-vous supprimer cet ${entityName}?`}
            onButConfirm={handleDeleteItem}
            onButCancel={handleCloseModal}
          />,
          document.body
        )}
    </div>
  );
}
