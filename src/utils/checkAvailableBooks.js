/**
 * Checks if any book copy in the array has a specified status type.
 *
 * @param {Array} copies - The array of book copy objects, each containing a status object with a type property.
 * @param {String} type - The status type to check for (e.g., "Available", "Reserved").
 * @returns {Boolean} Returns true if at least one book copy has the specified status type, otherwise false.
 */
export function hasBookCopyWithStatus(copies, type) {
    if (!copies || !Array.isArray(copies)) {
      return false;
    }
    return copies.some(item => item.status.type === type);
  }