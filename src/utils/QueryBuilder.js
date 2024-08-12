import { isNumeric } from './validation';

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

  