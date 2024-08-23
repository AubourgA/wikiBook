import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../helper/createEntitySlice'; // Assumant un slice générique
import { useDebounce } from './useDebounce';

export function useEntityManager({ endpoint, entityType }) {
  const [search, setSearch] = useState("");
  const [deleteError, setDeleteError] = useState(null);
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useDispatch();
  const { datas, loading, error, pagination } = useSelector(
    (state) => state[entityType.toLowerCase()] // On suppose que le slice est basé sur entityType
  );

  useEffect(() => {
    dispatch(
      getData({ endpoint, search: debouncedSearch, entityType })
    );
  }, [dispatch, debouncedSearch, endpoint, entityType]);

  const handleChangeSearch = (e) => setSearch(e.target.value);

  const handlePaginationClick = (url) => {
    dispatch(getData({ endpoint: url, search: debouncedSearch, entityType }));
  };

  return {
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
  };
}