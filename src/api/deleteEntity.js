import { axiosInstance } from './configHeaderToken';

export const deleteEntity = async (bookId, endpoint) => {
    const url =  `${endpoint}/${bookId}`
    try {
     
      await axiosInstance.delete(url);
      console.log(`Book with ID ${bookId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting book:', error.response ? error.response.data : error.message);
      throw error;
    }
  };