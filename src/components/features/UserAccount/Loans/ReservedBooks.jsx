import { useMemo } from 'react';
import { createEntity } from '../../../../api';
import { API_ENDPOINTS } from '../../../../Constants';
import { useBookContext } from '../../../../hooks/useBookContext';
// import Button from '../../../ui/Forms/Button';
import Title from '../../../ui/Title';
import SelectedBookForm from './SelectedBookForm';
import { format } from 'date-fns';

export default function ReservedBooks( {user}) {

    const { reservedBooks, clearReservedBooks } = useBookContext()

    const reservedBooksFiltered = useMemo(() => {
        return reservedBooks
          .map(book => {    
            if (!book.bookCopies || !Array.isArray(book.bookCopies)) return null;
            
            const availableCopies = book.bookCopies.filter(copy => copy.status && copy.status.type !== "Emprunté" );
      
            if (availableCopies.length === 0) return null;
           
            return {
              ...book,
              bookCopies: availableCopies
            };
          })
          .filter(book => book !== null);
    }, [reservedBooks]);
   
    const handleLoansClick =  (e, formData) => {
        const newFormData = {

            borrowDate : format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX", 'Europe/Paris'),
            bookCopy : formData.langue,
             user : `/api/users/${user.id}`
        }
        
        createEntity(API_ENDPOINTS.LOANS, newFormData)
          .then( response =>  {
                    console.log("succes", response)
                    clearReservedBooks()
                  })
          .catch(error => console.error('resrvarion faile',error))
    }
   
  return (
    <div>
        <Title text1="Ma sélection d'ouvrage(s)" level={3} custom1='border-b mb-2' />

     
        <ul>
            {reservedBooks.length != 0 ? reservedBooksFiltered.map( (item,index) => (
                
                <SelectedBookForm key={index} item={item} onSubmitBooking={handleLoansClick}/>
            )) : <p>Vide</p>
            }
        </ul>
    </div>
  )
}
