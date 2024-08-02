 import axios from "axios" 
 import { API_ENDPOINTS } from '../Constants/api.endspoints';

export const authentification = async (credentials, url = API_ENDPOINTS.AUTH) => {
    try {
      const response = await axios.post(url, {
        email: credentials.email,
        password: credentials.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      const token = response.data.token;
      return token;
    } catch (error) {
      if (error.response) {
        // La requête a été faite et le serveur a répondu avec un code de statut
        // qui sort de la plage des 2xx
        console.error('Error:', error.response.data);
      } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.error('Error:', error.request);
      } else {
        // Quelque chose s'est passé en configurant la requête qui a déclenché une erreur
        console.error('Error:', error.message);
      }
    }
  };