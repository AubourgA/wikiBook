import axios from 'axios';
import { API_ENDPOINTS } from '../Constants/';

export const getBooks = async (url = API_ENDPOINTS.BOOKS) => {
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/ld+json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };