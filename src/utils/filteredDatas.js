/**
 * Filters an array of objects based on a specified parameter and its value.
 *
 * @param {Array} data - The input array to filter.
 * @param {String} param - The key in the objects to check against the value.
 * @param {*} value - The value to filter out from the array.
 * @returns {Array} A filtered array where the specified parameter does not equal the given value.
 */
export const filterDatasWithParameter = (data, param, value) => {
    return data.filter( item => item[param] !== value)
  }


/**
 * Filters users by excluding those with the "ROLE_ADMIN" role and sorts the result by subscription date in descending order.
 *
 * @param {Array} data - The input array of user objects, each containing a roles array and subscribedAt date.
 * @returns {Array} A filtered and sorted array of users who are not admins, ordered by their subscription date in descending order.
 */
export const filteredUserbyRoleAndDate = ( data) => {
    let customersFiltered = []
     if (data && Array.isArray(data)) {
       customersFiltered = data.filter( item => !item.roles.includes("ROLE_ADMIN") )
       
       customersFiltered.sort( (a,b) => new Date(b.subscribedAt) - new Date(a.subscribedAt) )
       
       return customersFiltered
     }
     
   }

/**
 * Sorts an array of data objects in descending order by a specified date parameter and returns a limited number of results.
 *
 * @param {Array} data - The input array of objects to sort.
 * @param {String} params - The key that contains the date value to sort by.
 * @param {Number} max - The maximum number of results to return.
 * @returns {Array} A sorted and sliced array of objects based on the date parameter.
 */ 
export const orderedDescDataByDate = (data, params, max) => {
       
    if( data && Array.isArray(data)) {
         const sortedData = data.sort( (a,b)=> new Date(b[params] - new Date(a[params])))
         return sortedData.slice(0,max) 
      }
   }

/**
 * Filters book copies, excluding those with a status of "Retiré" (Removed).
 *
 * @param {Array} data - The input array of book copies, each containing a status object with a type property.
 * @returns {Number} The count of book copies that do not have a status of "Retiré".
 */
export const filteredbookCopies = (data) => {
    const bookCopiesArray = [];
    if( data && Array.isArray(data)) {
    data.forEach(item => {
      console.log("item", item)
      if (item.status.type != "Retiré")  bookCopiesArray.push(item );
        
      }
    )
    return bookCopiesArray.length;
  }
  };