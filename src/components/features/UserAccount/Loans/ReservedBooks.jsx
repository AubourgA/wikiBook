import { useMemo } from 'react';
import { createEntity } from '../../../../api';
import { API_ENDPOINTS } from '../../../../Constants';
import { useBookContext } from '../../../../hooks/useBookContext';
// import Button from '../../../ui/Forms/Button';
import Title from '../../../ui/Title';
import SelectedBookForm from './SelectedBookForm';
import { format } from 'date-fns';

export default function ReservedBooks( {user}) {

    const { reservedBooks } = useBookContext()

   
      
    // a modifier
    const handleLoansClick =  (e, formData) => {
     
      
        const newFormData = {

            borrowDate : format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX", 'Europe/Paris'),
            bookCopy : formData.langue,
             user : `/api/users/${user.id}`
        }
        
        
        createEntity(API_ENDPOINTS.LOANS, newFormData).then( response => console.log("succes", response))
        .catch(error => console.error('resrvarion faile',error))
    }
   
    const reservedBooksFiltered = useMemo(() => {
        return reservedBooks
          .map(book => {
          
            if (!book.bookCopies || !Array.isArray(book.bookCopies)) {
              return null;
            }
      
           
            const availableCopies = book.bookCopies.filter(copy =>
              copy.status && copy.status.type !== "Emprunté"
            );
      
           
            if (availableCopies.length === 0) {
              return null;
            }
      
           
            return {
              ...book,
              bookCopies: availableCopies
            };
          })
          
          .filter(book => book !== null);
      }, [reservedBooks]);
   
   

  return (
    <div>
        <Title text1="Ma sélection d'ouvrage(s)" level={3} custom1='border-b mb-2' />

     
        <ul>
            {reservedBooks.length != 0 ? reservedBooksFiltered.map( (item,index) => (
                
                // <li key={item.id} className='flex gap-2 my-2 p-2 items-center justify-between rounded bg-orange-300/25'>
                //     {item.title}

                //     <Button title="EMPRUNTER" category="nav-user" type='button' onButtonClick={() =>handleLoansClick(item.id)} />
                // </li>
                <SelectedBookForm key={index} item={item} onSubmitBooking={handleLoansClick}/>
            ))
                    : <p>Vide</p>
            }
        </ul>
    </div>
  )
}
