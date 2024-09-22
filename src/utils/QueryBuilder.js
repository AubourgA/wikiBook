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


