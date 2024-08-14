export const URL_BASE = `${import.meta.env.VITE_BASE}`;
export const URL_API = `${import.meta.env.VITE_API}`;


export const API_ENDPOINTS = {
    BASE : `${URL_BASE}`, 
    BOOKS: `${URL_API}/books`,
    GENRES :`${URL_API}/genres`,
    USERS:  `${URL_API}/users`,
    MAILER:`${URL_API}/send-email`,
    AUTH: `${URL_BASE}/auth`
 
  };