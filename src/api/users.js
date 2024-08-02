import axios from "axios";
import { API_ENDPOINTS } from '../Constants/api.endspoints';

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