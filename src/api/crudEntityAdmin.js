import { buildFullURL } from '../utils/QueryBuilder';
import { axiosInstance } from './configHeaderToken';


export const fetchEntity = async (url, search = "") => {
    try {
      const fullURL = buildFullURL(url, search);
      const response = await axiosInstance.get(fullURL);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error.response ? error.response.data : error.message);
      throw error;
    }
  };