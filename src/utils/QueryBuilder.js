import { isNumeric } from './validation';



/**
  * Returns an object containing search parameters based on the specified entity type.
 *
 * @param {string} search - The search string provided by the user.
 * @param {string} entityType - The type of entity for which to perform the search. Can be 'Author', 'Books', or 'Nationality'.
 *
 * @returns {Object} An object containing the appropriate search parameters for the specified entity.
 *                   - If `entityType` is 'Author', the returned object contains { name: search }.
 *                   - If `entityType` is 'Books', the returned object contains { ISBN: search } if `search` is numeric,
 *                     or { title: search } if `search` is not numeric.
 *                   - If `entityType` is 'Nationality', the returned object contains { country: search }.
 *
 * @throws {Error } Throws an error if the specified entity type is not supported.
 */
export const getSearchParams = (search, entityType) => {
  const result = {};
 
  switch (entityType) {
    case 'Authors':
    case 'Editors':
    case 'Genres' :
    case 'Languages':
      result.name = search;
      break;
    case 'Books':
      if (isNumeric(search)) {
        result.ISBN = search;
      } else {
        result.title = search;
      }
      break;
    case 'Nationnalities':
      result.country = search;
      break;
    case 'Status':
       result.type = search;
       break;
    case 'Loans':
       result.returnDate = search;
       break;
    default:
      throw new Error(`Type d'entité non supporté: ${entityType}`);
  }
  return result;
};


/**
 * Constructs a query string from an object of filters.
 *
 * @param {Object} filters - An object containing key-value pairs where keys are parameter names and values are their corresponding values.
 *
 * @returns {string} A query string representing the provided filters. 
 *                   - Only key-value pairs where the value is truthy are included in the query string.
 *                   - The query string is URL-encoded and formatted for use in a URL.
 *
 * Example usage:
 * const filters = { author: "John Doe", genre: "Fiction", year: "" };
 * const queryString = buildQueryParams(filters);
 * // Returns: "author=John%20Doe&genre=Fiction"
 */

export const buildQueryParams = (filters) => {
    const params = new URLSearchParams();
    for (const key in filters) {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    }
    return params.toString();
  };

  

/**
 * Constructs a full URL with optional search parameters based on the entity type.
 *
 * @param {string} [url=API_ENDPOINTS.BOOKS] - The base URL to which search parameters will be appended. Defaults to `API_ENDPOINTS.BOOKS` if not provided.
 * @param {string} [search=""] - The search string to include in the query parameters. Defaults to an empty string if not provided.
 * @param {string} [entityType="Books"] - The type of entity to use for generating search parameters. Defaults to "Books" if not provided.
 *
 * @returns {string} The full URL with query parameters if a search string is provided. 
 *                   - If a search string is provided, the URL will include query parameters generated from the search and entity type.
 *                   - If no search string is provided, the URL remains as the base URL without additional parameters.
 *
 * Example usage:
 * const fullURL = buildFullURL("https://api.example.com/books", "Harry Potter", "Books");
 * // Returns: "https://api.example.com/books?author=Harry%20Potter"
 *
 * const fullURL = buildFullURL("https://api.example.com/authors", "J.K. Rowling", "Author");
 * // Returns: "https://api.example.com/authors?name=J.K.%20Rowling"
 *
 * const fullURL = buildFullURL();
 * // Returns: "https://api.example.com/books" (assuming `API_ENDPOINTS.BOOKS` is set to this URL)
 */
export const buildFullURL = (url , search = "", entityType = "") => {
  let fullURL = url;
  if (search) {
    const params = buildQueryParams(getSearchParams(search, entityType));
    fullURL = `${url}?${params}`;
  }

  return fullURL;
};


/**
 * Fetches data using a provided fetch function and updates the state with the result, handling errors if they occur.
 *
 * @param {Function} fetchFunction - A function that returns a promise resolving to the data to be fetched. This function should handle the actual data retrieval process.
 * @param {Function} setState - A function to update the state with the fetched data. Typically, this would be a state setter function from a React `useState` hook or similar.
 * @param {string} errorMessage - A message to log in case of an error or if the response data does not meet expected criteria.
 *
 * @returns {Promise<void>} A promise that resolves when the data has been fetched and the state has been updated, or when an error has been logged.
 *
 * @throws {Error} Logs errors to the console if the fetch fails or if the response data does not contain the expected `hydra:member` property.
 *
 * Example usage:
 * const fetchFunction = () => fetch('/api/data').then(res => res.json());
 * const setState = data => console.log('State updated:', data);
 * const errorMessage = 'Failed to fetch data';
 * 
 * fetchGenericData(fetchFunction, setState, errorMessage)
 *   .then(() => console.log('Data fetch complete'))
 *   .catch(error => console.error('Data fetch failed', error));
 */
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