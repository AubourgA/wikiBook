import { API_ENDPOINTS } from '../Constants';
import { axiosInstance } from '.';
import { buildFullURL } from '../utils/QueryBuilder';

export const fetchAuthors = async (url, search = "") => {
  try {
    const fullURL = buildFullURL(url, search);
    const response = await axiosInstance.get(fullURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error.response ? error.response.data : error.message);
    throw error;
  }
};


  export const createAuthor = async (authorData) => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.AUTHORS, authorData);
      return response.data; // Retourne la réponse de l'API (le livre créé, ou autre message de succès)
    } catch (error) {
      console.error('Failed to create book:', error);
      throw error; // Vous pouvez lever l'erreur pour la gérer dans votre composant formulaire
    }
  };

  //SUPRIMER UN LIVRE
export const deleteAuthor = async (authorId) => {
  try {
    const url = `${API_ENDPOINTS.AUTHORS}/${authorId}`;
    await axiosInstance.delete(url);
    console.log(`Book with ID ${authorId} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting book:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateAuthor = async (id, data) => {
  try {
    const response = await axiosInstance.put(
      `${API_ENDPOINTS.AUTHORS}/${id}`,  // URL incluant l'ID du livre
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