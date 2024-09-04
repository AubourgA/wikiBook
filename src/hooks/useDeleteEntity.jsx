import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntity } from '../api';

export function useDeleteEntity(apiEndpoint, getFetchData, debouncedSearch, entityType) {
  const [showModal, setShowModal] = useState(false);
  const [selectedEntityId, setSelectedEntityId] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const dispatch = useDispatch();

  const handleCallDeleteModal = (entity) => {
    setShowModal(true);
    setSelectedEntityId(entity.id);
  };

  const handleDeleteItem = async () => {
    try {
      await deleteEntity(selectedEntityId, apiEndpoint);
      dispatch(getFetchData({ endpoint: apiEndpoint, search: debouncedSearch, entityType }));
      setShowModal(false);
      setDeleteError(null);
    } catch (err) {
      setShowModal(false);
      setDeleteError("Echec de suppression, cette entité est liée à d'autres données.");
      console.error("Failed to delete entity:", err);
    }
  };

  return {
    showModal,
    deleteError,
    handleCallDeleteModal,
    handleDeleteItem,
    handleCloseModal: () => setShowModal(false),
  };
}