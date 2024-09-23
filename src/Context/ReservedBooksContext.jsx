import { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider =  ( {children}) =>{
    const [reservedBooks, setReservedBooks] = useState([])

    const reserveBooks = (book) => setReservedBooks( prev => [...prev,book])
    
    const clearReservedBooks = () => setReservedBooks([])

    return (
        <BookContext.Provider value={ {reserveBooks, reservedBooks, clearReservedBooks} }>
            {children}
        </BookContext.Provider>
    )
}

