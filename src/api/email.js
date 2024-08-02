import { API_ENDPOINTS } from '../Constants/api.endspoints';

export const sendEmail = async ( lastname, firstname, email, message,url = API_ENDPOINTS.MAILER) => {
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