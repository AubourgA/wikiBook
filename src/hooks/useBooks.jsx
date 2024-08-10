// import { useState, useEffect } from 'react';
// import { fetchBooks } from '../api';

// export const useBooks = (searchQuery = "") => {
//   const [books, setBooks] = useState({  });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     const loadBooks = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const data = await fetchBooks(searchQuery);
    
//         setBooks(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadBooks();
//   }, [searchQuery]);


//   return { books,  loading, error };
// };

import { useState, useEffect, useCallback } from 'react';
import { fetchBooks } from '../api'; // Assurez-vous que l'importation du chemin est correcte

export const useBooks = (searchQuery = "") => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooksData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBooks(searchQuery);
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchBooksData();
  }, [fetchBooksData]);

  const refetch = () => {
    fetchBooksData();
  };

  return { books, loading, error, refetch };
};