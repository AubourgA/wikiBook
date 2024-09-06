import { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider =  ( {children}) =>{
    const [reservedBooks, setReservedBooks] = useState([])

    const reserveBooks = (book) => {
      
        setReservedBooks( prev => [...prev,book])
    }

    return (
        <BookContext.Provider value={ {reserveBooks, reservedBooks} }>
            {children}
        </BookContext.Provider>
    )
}

