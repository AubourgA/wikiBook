import { axiosInstance } from './configHeaderToken';

/**
 * 
  * Updates a specific entity by its ID at the given endpoint.
 *
 * This function sends a PUT request to the specified API endpoint to update an entity
 * with the provided data. It includes appropriate headers and returns the updated
 * entity data. If the update request fails, it logs the error and rethrows it.
 *
 * @param {string|number} id - The ID of the entity to update. It should be a valid identifier
 *                             for the entity you want to modify.
 * @param {string} endpoint - The base URL of the endpoint to update the entity. This should
 *                            be the URL pattern for accessing the entity data, without the ID.
 *                            For example, `API_ENDPOINTS.AUTHORS`.
 * @param {Object} data - The data to update the entity with. This should be an object
 *                        containing the fields and values to be updated.
 *
 * @returns {Promise<Object>} A promise that resolves to the updated entity data returned
 *                             from the API response.
 *
 * @throws {Error} Throws an error if the update request fails or if there is an issue with
 *                 the response. The error message includes details from the API response
 *                 if available.
 *
 */
export const updateEntity = async (id, endpoint, data) => {
    const url = `${endpoint}/${id}`
    try {
      const response = await axiosInstance.put(
        url,  
        data, 
        {
          headers: {
            'Content-Type': 'application/json',  
          },
        }
      );
      return response.data;  
    } catch (error) {
      console.error('Failed to update book', error);
      throw error;  
    }
  };
  