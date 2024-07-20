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