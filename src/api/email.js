import { API_ENDPOINTS } from '../Constants/api.endspoints';

/**
 * Sends an email using an HTTP POST request to a specified mailer endpoint.
 *
 * @param {String} lastname - The sender's last name.
 * @param {String} firstname - The sender's first name.
 * @param {String} email - The sender's email address.
 * @param {String} message - The content of the email message.
 * @param {String} [url=API_ENDPOINTS.MAILER] - The API endpoint for sending the email (defaults to the mailer endpoint).
 * @returns {Promise<void>} A promise that resolves when the email is successfully sent.
 * @throws Will log an error to the console if the email fails to send.
 */
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