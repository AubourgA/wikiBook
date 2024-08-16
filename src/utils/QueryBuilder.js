import { isNumeric } from './validation';
import { API_ENDPOINTS } from '../Constants';

export const getSearchParams = (search) => {
   // Vérifie si la recherche est uniquement composée de chiffres
  if (isNumeric(search)) {
    return { ISBN: search };  
  } else {
    return { title: search }; 
  }
};


export const buildQueryParams = (filters) => {
    const params = new URLSearchParams();
    for (const key in filters) {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    }
    return params.toString();
  };

  

  export const buildFullURL = (url = API_ENDPOINTS.BOOKS, search = "") => {
    let fullURL = url;

    if (search) {
        const params = buildQueryParams(getSearchParams(search));
        fullURL = `${url}?${params}`;
    }

    return fullURL;
};

export const fetchGenericData = async (fetchFunction, setState, errorMessage) => {
  try {
    const response = await fetchFunction();
    if (Array.isArray(response["hydra:member"])) {
      setState(response["hydra:member"]);
    } else {
      console.error(errorMessage, response);
    }
  } catch (error) {
    console.error(errorMessage, error);
  }
};