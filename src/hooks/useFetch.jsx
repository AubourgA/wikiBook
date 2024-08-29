import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { fetchEntity, getEntityPublic } from '../api';

const useFetch = (endpoint, id, initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  // Déterminez la fonction de récupération des données en fonction du rôle
  const fetchFunction = user?.roles.includes("ROLE_ADMIN") ? fetchEntity : getEntityPublic;
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Construire l'URL complète si un ID est fourni
        const fullUrl = id ? `${endpoint}/${id}` : endpoint;
        const result = await fetchFunction(fullUrl);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, id, user, fetchFunction]); // Ajoutez fetchFunction comme dépendance

  return { data, isLoading, error };
};

export default useFetch;