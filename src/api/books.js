import axios from 'axios';
import { API_ENDPOINTS } from '../Constants/';
import { axiosInstance } from '../api';
import { buildFullURL } from '../utils/QueryBuilder';


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


//RECUPERE LIVRES
export const fetchBooks = async (url, search = "") => {
  try {
    const fullURL = buildFullURL(url, search);
    const response = await axiosInstance.get(fullURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error.response ? error.response.data : error.message);
    throw error;
  }
};


//CREER UN LIVRE
export const createBook = async (bookData) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.BOOKS, bookData);
    return response.data; // Retourne la réponse de l'API (le livre créé, ou autre message de succès)
  } catch (error) {
    console.error('Failed to create book:', error);
    throw error; // Vous pouvez lever l'erreur pour la gérer dans votre composant formulaire
  }
};


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



export const updateBook = async (id, data) => {
  try {
    const response = await axiosInstance.put(
      `${API_ENDPOINTS.BOOKS}/${id}`,  // URL incluant l'ID du livre
      data,  // Données complètes du livre
      {
        headers: {
          'Content-Type': 'application/json',  // Type de contenu pour JSON
        },
      }
    );
    return response.data;  // Retourne les données de la réponse
  } catch (error) {
    console.error('Failed to update book', error);
    throw error;  // Lance une erreur en cas de problème
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