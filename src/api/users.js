import axios from "axios";

import { API_ENDPOINTS } from '../Constants';

export const createUser = async (formData,url = API_ENDPOINTS.USERS) => {
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
  
    if (response.status === 201) {
    
      return { success: true };
    } else {
   
      return { success: false, data: response.data };
    }
  } catch (error) {
    const errorMsg = error.response ? error.response.data : error.message;
    return { success: false, error: errorMsg };
  }
  };

  // export const getTotalUsers = async () => {
  //   try {
  //     const response = await axiosInstance.get(API_ENDPOINTS.USERS);
  //     return response.data['hydra:totalItems'];
  //   } catch (error) {
  //     console.error('Error fetching total users:', error.response ? error.response.data : error.message);
  //     throw error;
  //   }
  // };