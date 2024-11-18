import { axiosInstance } from './configHeaderToken';

/**
 * Deletes an entity from a specified endpoint by its ID using an HTTP DELETE request.
 *
 * @param {String|Number} Id - The ID of the entity to be deleted.
 * @param {String} endpoint - The API endpoint to send the DELETE request to (e.g., '/books').
 * @returns {Promise<void>} A promise that resolves when the entity is successfully deleted.
 * @throws Will throw an error if the deletion fails.
 */
export const deleteEntity = async (Id, endpoint) => {
    const url =  `${endpoint}/${Id}`
   
    try {
     
      await axiosInstance.delete(url);
     
    } catch (error) {
      console.error('Error deleting book:', error.response ? error.response.data : error.message);
      throw error;
    }
  };