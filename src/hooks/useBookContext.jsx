import { useContext } from 'react';
import { BookContext } from '../Context/ReservedBooksContext'

export const useBookContext = () => useContext(BookContext);