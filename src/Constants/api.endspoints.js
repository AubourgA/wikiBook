export const URL_BASE = `${import.meta.env.VITE_BASE}`;
export const URL_API = `${import.meta.env.VITE_API}`;


export const API_ENDPOINTS = {
    BASE : `${URL_BASE}`, 
    BOOKS: `${URL_API}/books`,
    AUTHORS : `${URL_API}/authors`,
    GENRES :`${URL_API}/genres`,
    EDITORS : `${URL_API}/editors`,
    LANGUAGES : `${URL_API}/languages`,
    LOANS : `${URL_API}/loans`,
    NATIONALITIES : `${URL_API}/nationalities`,
    USERS:  `${URL_API}/users`,
    MAILER:`${URL_API}/send-email`,
    AUTH: `${URL_BASE}/auth`
 
  };