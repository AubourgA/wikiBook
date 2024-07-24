import axios from "axios";
// import Cookies from 'js-cookie'

export const callAPI = async (url, options = {}) => {
    try {
      const defaultOptions = {
        method: "GET",
        mode: 'cors',
        headers: {
          Accept: "application/ld+json",
          ...options.headers
        },
        ...options
      };
  
      const response = await fetch(url, defaultOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error; // Re-throw the error if you want to handle it elsewhere
    }
  };

  export const sendEmail = async (url, lastname, firstname, email, message) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': "application/json",
        
      },
      body: JSON.stringify( {
        lastname, 
        firstname,
         email,
          message} ),
    });
  
    if (response.ok) {
      console.log('Email sent!');
    } else {
      const error = await response.json();
      console.error('Error:', error);
    }
  };




  
export const authentification = async (url, credentials) => {
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
    // Stocker le JWT dans un cookie HTTP Only
    localStorage.setItem('jwt-token', token)
    // Cookies.set('token', token, { httpOnly: true });
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