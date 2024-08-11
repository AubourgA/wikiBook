import axios from 'axios';
import { API_ENDPOINTS } from '../Constants/';
import { axiosInstance } from '../api';








// PUBLIC
export const getBooks = async (url = API_ENDPOINTS.BOOKS) => {
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


//AUTHENTIFICATED
//AFFICHAGE ENSEMNLE LIBRE ADMIN


export const fetchBooks = async (url =`${API_ENDPOINTS.BOOKS}`) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error.response ? error.response.data : error.message);
    throw error;
  }
};



//CREER UN LIVRE



//EDITER UN LIVRE
export const fetchBookById = async (id) => {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.BOOKS}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error.response ? error.response.data : error.message);
    throw error;
  }
};

//SUPRIMER UN LIVRE
export const deleteBook = async (bookId) => {
  try {
    const url = `${API_ENDPOINTS.BOOKS}/${bookId}`;
    await axiosInstance.delete(url);
    console.log(`Book with ID ${bookId} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting book:', error.response ? error.response.data : error.message);
    throw error;
  }
};