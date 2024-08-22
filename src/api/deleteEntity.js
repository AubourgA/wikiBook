import { axiosInstance } from './configHeaderToken';

export const deleteEntity = async (Id, endpoint) => {
    const url =  `${endpoint}/${Id}`
    console.log(url)
    try {
     
      await axiosInstance.delete(url);
     
    } catch (error) {
      console.error('Error deleting book:', error.response ? error.response.data : error.message);
      throw error;
    }
  };