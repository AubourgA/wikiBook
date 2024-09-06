import { createEntity } from '../../../../api';
import { API_ENDPOINTS } from '../../../../Constants';
import { useBookContext } from '../../../../hooks/useBookContext';
// import Button from '../../../ui/Forms/Button';
import Title from '../../../ui/Title';
import SelectedBookForm from './SelectedBookForm';


export default function ReservedBooks( {user}) {

    const { reservedBooks } = useBookContext()


      
    // a modifier
    const handleLoansClick = (id) => {
        const newFormData = {

            borrowDate : "2024-09-04T16:43:10.444Z",
            bookCopy : `/api/book_copies/${id}`,
             user : `/api/users/${user.id}`
        }
        
        createEntity(API_ENDPOINTS.LOANS, newFormData).then( response => console.log("succes", response))
        .catch(error => console.error('resrvarion faile',error))
    }
   
   

  return (
    <div>
        <Title text1="Ma sélection d'ouvrage(s)" level={3} custom1='border-b mb-2' />

     
        <ul>
            {reservedBooks.length != 0 ? reservedBooks.map( item => (
                
                // <li key={item.id} className='flex gap-2 my-2 p-2 items-center justify-between rounded bg-orange-300/25'>
                //     {item.title}

                //     <Button title="EMPRUNTER" category="nav-user" type='button' onButtonClick={() =>handleLoansClick(item.id)} />
                // </li>
                <SelectedBookForm key={item.id} item={item} onButtonClik={handleLoansClick}/>
            ))
                    : <p>Vide</p>
            }
        </ul>
    </div>
  )
}
