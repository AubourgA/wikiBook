import axios from "axios";

import { API_ENDPOINTS } from '../Constants';

/**
 * Creates a new user by sending a POST request with the provided form data to the user API endpoint.
 *
 * @param {Object} formData - The user data to be sent in the request body, typically as a JSON object.
 * @param {String} [url=API_ENDPOINTS.USERS] - Optional. The API endpoint to create the user (defaults to the USERS endpoint).
 * @returns {Promise<Object>} A promise that resolves to an object containing:
 *  - {Boolean} success: Indicates whether the user creation was successful.
 *  - {Object} [data]: The response data, provided if the request was unsuccessful.
 *  - {String} [error]: An error message, provided if the request failed.
 */
export const createUser = async (formData,url = API_ENDPOINTS.USERS) => {
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
    if (response.status === 201) {
      return { success: true };
    } 
    else {
      return { success: false, data: response.data };
    }
  } catch (error) {
    const errorMsg = error.response ? error.response.data : error.message;
    return { success: false, error: errorMsg };
  }
  };

