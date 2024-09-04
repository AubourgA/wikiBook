
import axios from 'axios';
import { axiosInstance } from '.';

import { buildFullURL } from '../utils/QueryBuilder';


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
 * Fetches data using a provided fetch function and updates the state with the result, handling errors if they occur.
 *
 * @param {Function} fetchFunction - A function that returns a promise resolving to the data to be fetched. This function should handle the actual data retrieval process.
 * @param {Function} setState - A function to update the state with the fetched data. Typically, this would be a state setter function from a React `useState` hook or similar.
 * @param {string} errorMessage - A message to log in case of an error or if the response data does not meet expected criteria.
 *
 * @returns {Promise<void>} A promise that resolves when the data has been fetched and the state has been updated, or when an error has been logged.
 *
 * @throws {Error} Logs errors to the console if the fetch fails or if the response data does not contain the expected `hydra:member` property.
 *
 * Example usage:
 * const fetchFunction = () => fetch('/api/data').then(res => res.json());
 * const setState = data => console.log('State updated:', data);
 * const errorMessage = 'Failed to fetch data';
 * 
 * fetchGenericData(fetchFunction, setState, errorMessage)
 *   .then(() => console.log('Data fetch complete'))
 *   .catch(error => console.error('Data fetch failed', error));
 */
export const fetchGenericData = async (fetchFunction, setState, errorMessage) => {
    try {
      const response = await fetchFunction();
      if (Array.isArray(response["hydra:member"])) {
        setState(response["hydra:member"]);
      } else {
        console.error(errorMessage, response);
      }
    } catch (error) {
      console.error(errorMessage, error);
    }
  };

  // **************
  // A DEVELOPPER
  // RECUPERER L ENSEMBLE DES DATA DES ENTITE DANS UN TABLEAU
  //************* */
  // export const fetchAllData = async (fetchFunction, setState, errorMessage) => {
  //   let allData = [];
  //   try {
  //     const response = await fetchFunction();
  //     if (Array.isArray(response["hydra:member"])) {

  //       allData = [...allData, ...response["hydra:member"]]
        
  //     }
  //     // let nextPageUrl = null;

  //     } catch (error) {
  //       console.error(errorMessage)
  //     }
      
  //   setState(allData)
  // };

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

