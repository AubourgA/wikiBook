
import axios from 'axios';
import { axiosInstance } from '.';

import { buildFullURL } from '../utils/QueryBuilder';


/**
 * Fetches public entity data from a specified API endpoint.
 * 
 * This function makes a GET request to the provided endpoint using axios.
 * It sets the 'Content-Type' header to 'application/ld+json' for JSON-LD compatibility.
 *
 * @async
 * @function getEntityPublic
 * 
 * @param {string} endpoint - The full URL of the API endpoint to fetch data from.
 * 
 * @returns {Promise<Object>} A promise that resolves to the data returned by the API.
 * 
 * @throws {Error} Logs the error to the console and re-throws it if the API request fails.
 * 
 * @example
 * try {
 *   const data = await getEntityPublic('https://api.example.com/public/entity/123');
 *   console.log(data);
 * } catch (error) {
 *   console.error('Failed to fetch public entity:', error);
 * }
 */
export const getEntityPublic = async (endpoint) => {
  const url = `${endpoint}`
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



/**
 * Fetches all paginated data from an API and combines it into a single array.
 * 
 * This function automatically handles pagination by following the "hydra:next" links
 * provided by the API. It accumulates all data from each page into a single array
 * before updating the state with the complete set of data.
 *
 * @async
 * @function fetchAllGenericData
 * 
 * @param {string} baseURL - The base URL of the API.
 * @param {Function} fetchFunction - An asynchronous function that performs the API request.
 *                                   It should accept an 'endpoint' parameter and return
 *                                   the response data.
 * @param {Function} setState - A function to update the state with the fetched data.
 * @param {string} errorMessage - An error message to display if something goes wrong.
 * 
 * @throws {Error} Logs an error to the console if data fetching fails.
 * 
 * @example
 * fetchAllGenericData(
 *   'https://api.example.com',
 *   (endpoint) => fetchEntity(endpoint || '/authors'),
 *   setAuthors,
 *   "Error loading authors"
 * );
 */

  export const fetchAllGenericData = async (baseURL,fetchFunction, setState, errorMessage) => {
    
    try {
      let allData = [];
      let nextPage = null;
      do {
        const endpoint = nextPage || '';
        const response = await fetchFunction(endpoint);
        
        if (Array.isArray(response["hydra:member"])) {
          allData = [...allData, ...response["hydra:member"]];
          
          // Vérifier s'il y a une page suivante
          nextPage = response["hydra:view"] && response["hydra:view"]["hydra:next"];
          if (nextPage) {
            // Extraire le chemin relatif de l'URL complète
           
            nextPage = new URL(nextPage, baseURL).href;
            console.log(nextPage)
          }
        } else {
          console.error(errorMessage, response);
          break;
        }
      } while (nextPage);
  
      setState(allData);
    } catch (error) {
      console.error(errorMessage, error);
    }
  };

/**
 * Fetches data from a specified endpoint.
 *
 * @param {string} endpoint - The URL of the endpoint to fetch data from.
 *
 * @returns {Promise<Object>} The data retrieved from the API response.
 *
 * @throws {Error} Throws an error if the request fails or if there is an issue with the response.
 */
  export const fetchEntity = async (endpoint) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching :', error.response ? error.response.data : error.message);
      throw error;
    }
  };



/**
 * 
  *  * Fetches data for a specific entity by its ID from the given endpoint.
 *
 * This function sends a GET request to the API endpoint with the specified entity ID
 * and returns the data from the API response. If an error occurs during the request,
 * it logs the error and rethrows it.
 *
 * @param {string|number} id - The ID of the entity to fetch. It should be a valid identifier
 *                             for the entity you are trying to retrieve.
 * @param {string} endpoint - The base URL of the endpoint to fetch data from. This should be
 *                            the URL pattern for accessing the entity data, without the ID.
 *                            For example, `API_ENDPOINTS.AUTHORS`.
 *
 * @returns {Promise<Object>} A promise that resolves to the data retrieved from the API response.
 *                             The data returned is typically an object containing information
 *                             about the requested entity.
 *
 * @throws {Error} Throws an error if the request fails or if there is an issue with the response.
 *                 The error message includes details from the API response if available.
 *
 */
  export const fetchEntityById = async (id, endpoint) => {
    try {
      const url = `${endpoint}/${id}`
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching book:', error.response ? error.response.data : error.message);
      throw error;
    }
  };


  /**
 * Fetches entities from an API based on provided parameters.
 * 
 * This function constructs a URL using the provided base URL, search term, and entity type.
 * It can also apply an additional filter for ongoing entities (where returnDate doesn't exist).
 * The function uses an axios instance to make the GET request.
 *
 * @async
 * @function fetchEntityByParams
 * 
 * @param {string} url - The base URL for the API endpoint.
 * @param {string} [search=""] - The search term to filter entities (default is an empty string).
 * @param {string} [filter=""] - A filter parameter. If set to "ongoing", it adds a query to filter entities without a return date.
 * @param {string} entityType - The type of entity being fetched (used in URL construction).
 * 
 * @returns {Promise<Object>} The data returned from the API.
 * 
 * @throws {Error} Logs an error to the console and re-throws if the API request fails.
 * 
 * @example
 * try {
 *   const books = await fetchEntityByParams('/api', 'fantasy', 'ongoing', 'books');
 *   console.log(books);
 * } catch (error) {
 *   console.error('Failed to fetch books:', error);
 * }
 */
  export const fetchEntityByParams = async (url, search = "", filter="", entityType) => {
    let fullURL = buildFullURL(url, search, entityType);
   
    if( filter ==="ongoing")  fullURL += `?exists[returnDate]=false`

    try {

      const response = await axiosInstance.get(fullURL);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error.response ? error.response.data : error.message);
      throw error;
    }
  };




  
/**
 * Retrieves the total number of items from a given API endpoint.
 *
 * This function sends a GET request to the specified endpoint to fetch data, and
 * returns the total number of items available. The function assumes that the response
 * includes a field named `hydra:totalItems` that represents the total count of items.
 *
 * @param {string} endpoint - The URL of the endpoint to fetch data from. This should be
 *                            the URL pattern for accessing the entity data.
 *
 * @returns {Promise<number>} A promise that resolves to the total number of items.
 *
 * @throws {Error} Throws an error if the request fails or if there is an issue with the response.
 *
 * @example
 * // Example usage to get the total number of loans
 * try {
 *   const totalLoans = await getTotalItems(API_ENDPOINTS.LOANS);
 *   console.log('Total Loans:', totalLoans);
 * } catch (error) {
 *   console.error('Failed to fetch total loans:', error);
 * }
 */
export const getTotalItems = async (endpoint) => {
  try {
    const response = await fetchEntity(endpoint);
    return response['hydra:totalItems'];
  } catch (error) {
    console.error('Error fetching items:', error.response ? error.response.data : error.message);
    throw error;
  }
};

