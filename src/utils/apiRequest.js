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