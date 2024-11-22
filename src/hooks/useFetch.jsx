import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { fetchEntity, getEntityPublic } from '../api';

const useFetch = (endpoint, id, initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchFunction = user?.roles.includes("ROLE_ADMIN") ? fetchEntity : getEntityPublic;
 
  useEffect(() => {
    if (!endpoint) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    const fetchData = async () => {
      
      try {
        setIsLoading(true);
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
  }, [endpoint, id, user, fetchFunction]); 

  return { data, isLoading, error };
};

export default useFetch;