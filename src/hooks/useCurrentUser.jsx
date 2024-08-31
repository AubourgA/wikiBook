import { useState, useEffect } from 'react';
import { fetchEntity } from '../api';
import { API_ENDPOINTS } from '../Constants';


const useCurrentUser = ()=> {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const data = await fetchEntity(API_ENDPOINTS.CURRENTUSER);
        setCurrentUser(data);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return { currentUser, loading, error };
}

export default useCurrentUser;

