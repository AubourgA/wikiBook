import { API_ENDPOINTS } from '../Constants';
import { axiosInstance } from '.';

export const fetchEditors= async () => {
    try {
      const response = await axiosInstance.get(`${API_ENDPOINTS.EDITORS}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching book:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
