import { nanoid } from 'nanoid';

/**
 * Retrieves the value from a nested object using a dot-separated path.
 *
 * @param {Object} obj - The object from which to retrieve the nested value.
 * @param {String} path - A dot-separated string representing the path to the desired value 
 *                        (e.g., 'user.address.city').
 * @returns {*} The value at the specified path, or undefined if the path does not exist.
 */
export const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };


  /**
 * Extracts a list of users from a nested data structure, sorts them by loan date in descending order, 
 * and limits the number of results.
 *
 * @param {Array} data - The input array containing items, each potentially holding a 'loans' array. 
 *                       Each loan must include a 'user' object with 'name', 'firstname', and 'borrowDate'.
 * @param {number} limit - The maximum number of users to return after sorting.
 * @returns {Array} An array of user objects with the following structure:
 *                  - {String} id: A unique identifier for each user.
 *                  - {String} name: The user's last name.
 *                  - {String} firstname: The user's first name.
 *                  - {String} date: The borrow date of the loan.
 */
  export const extractUsersFromSortedData = (data,limit) => {
    const userArray = [];
  
    data.forEach(item => {
      if (item.loans) {
        item.loans.forEach( loan => {
          if (loan.user && loan.user.firstname && loan.user.name) {
            userArray.push({ 
              id:nanoid(8),
              name: loan.user.name, 
              firstname: loan.user.firstname,
              date:  loan.borrowDate
            });
          }
        });
      }
    });
    userArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    return userArray.slice(0,limit);
  };
