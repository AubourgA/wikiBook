import { format } from 'date-fns';

/**
 * Formats a date string to the format "yyyy-MM-dd".
 *
 * @function
 * @name formatDate
 * 
 * @param {string} dateString - The date string to be formatted. It should be in a format recognized by the `Date` constructor.
 * 
 * @returns {string} - The formatted date string in the format "yyyy-MM-dd". Returns an empty string if the input is invalid or empty.
 * 
 * @example
 * // Example usage:
 * const formattedDate = formatDate('2024-08-28T12:34:56Z');
 * console.log(formattedDate); // Outputs: "2024-08-28"
 **/
  export const formatDate = (dateString) => {
    if (!dateString) return '';
  
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      return ''; 
    }
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };


 /**
 * Formats an ISO 8601 date string to a specific format.
 *
 * @function
 * @name formatDateISO
 * 
 * @param {string} dateISO - The ISO 8601 date string to be formatted (e.g., "2024-08-28T12:34:56Z").
 * 
 * @returns {string} - The formatted date string in the format "dd-MM-yyyy HH:mm".
 * 
 * @example
 * // Example usage:
 * const formattedDate = formatDateISO('2024-08-28T12:34:56Z');
 * console.log(formattedDate); // Outputs: "28-08-2024 12:34"
 */
 export const formatDateISO = (dateISO) => {
  const date = new Date(dateISO);
  return format(date, 'dd-MM-yyyy HH:mm');
 }