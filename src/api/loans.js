import { API_ENDPOINTS } from '../Constants';
import { axiosInstance } from '../api';

export const fetchLoans= async () => {
    try {
      const response = await axiosInstance.get(`${API_ENDPOINTS.LOANS}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching book:', error.response ? error.response.data : error.message);
      throw error;
    }
  };


  export const getTotalLoans= async () => {
    try {
      const response = await fetchLoans();
      return response['hydra:totalItems'];
    } catch (error) {
      console.error('Error fetching book:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
