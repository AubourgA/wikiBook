
import { axiosInstance } from './configHeaderToken';

/**
 * 
  * Creates a new entity at the specified endpoint with the provided data.
 *
 * This function sends a POST request to the given API endpoint to create a new entity
 * using the provided form data. It returns the response from the API, which typically
 * includes the created entity data or a success message. If the creation request fails,
 * it logs the error and rethrows it.
 *
 * @param {string} endpoint - The URL of the endpoint to create the entity. This should be
 *                            the URL pattern for accessing the entity creation endpoint.
 *                            For example, `API_ENDPOINTS.AUTHORS`.
 * @param {Object} formDatas - The data to create the entity with. This should be an object
 *                             containing the fields and values required for the entity creation.
 *
 * @returns {Promise<Object>} A promise that resolves to the data returned from the API response,
 *                             which usually includes the created entity data or a success message.
 *
 * @throws {Error} Throws an error if the creation request fails or if there is an issue with
 *                 the response. The error message includes details from the API response
 *                 if available.
 *
 */
export const createEntity = async (endpoint, formDatas) => {
    const url = `${endpoint}`

    try {
      const response = await axiosInstance.post(url, formDatas);
      return response.data; // Retourne la réponse de l'API (le livre créé, ou autre message de succès)
    } catch (error) {
      console.error('Failed to create book:', error);
      throw error; // Vous pouvez lever l'erreur pour la gérer dans votre composant formulaire
    }
  };