import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from "../components/ui/Card"
import Filters from '../components/features/filters/Filters';
import Loader from '../components/ui/Loader'

import { buildQueryParams } from "../utils/QueryBuilder"
import {  fetchEntityById, getEntityPublic } from '../api';
import { API_ENDPOINTS } from '../Constants/api.endspoints';
import { INITIAL_FILTERS_VALUE, 
  // PAGINATION_BUTTONS
 } 
  from '../Constants';
import Error from '../components/ui/Error/Error';
import Title from '../components/ui/Title';
// import Pagination from '../components/ui/Table/Pagination';
import {useBookContext} from '../hooks/useBookContext';
import { hasBookCopyWithStatus } from '../utils/checkAvailableBooks';
import useCurrentUser from '../hooks/useCurrentUser'

export default function Catalog() {

  const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState( INITIAL_FILTERS_VALUE)
    
    const {reserveBooks} = useBookContext();
    const {currentUser} = useCurrentUser();

    const navigate = useNavigate()

    
  useEffect(() => {
   
     const fetchBooks = async () => {
            setIsLoading(true);
            try {
            
              const booksData = await getEntityPublic(API_ENDPOINTS.BOOKS);
              setBooks(booksData);
            } catch (error) {
              setError(error);
            } finally {
              setIsLoading(false);
            }
        }
      fetchBooks()
    }, []); 



const handleInputFilter = (name, value) => {
  setFilters( (prev) => ( {
      ...prev,
      [name] : value
  }))
  
}



const handleResultFilter = async () => {
  const queryParams = buildQueryParams(filters);
  const apiUrl = `${API_ENDPOINTS.BOOKS}?${queryParams}`;
 
  setIsLoading(true);
  try {
    const booksData = await getEntityPublic(apiUrl);
    setBooks(booksData);
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
};


const handleResetFilters = async () => {
  setFilters(INITIAL_FILTERS_VALUE);
  setIsLoading(true);
  try {
    const booksData = await getEntityPublic(API_ENDPOINTS.BOOKS);
    setBooks(booksData);
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
};

const handleDetailBook = (id) => navigate(`/Catalogs/${id}`)

const handleAddBook = async (id) => {

  if(!currentUser) return

  try {
    const book = await fetchEntityById(id, API_ENDPOINTS.BOOKS); 
   
    reserveBooks(book);
    navigate('/Account/Emprunt')
    //appeler notification
  } catch (error) {
    console.error('Erreur lors de la réservation du livre :', error);
  }
}


// const handlePaginationClick = async (path) => {
//   if (path) {
//     const fullUrl = new URL(path, API_ENDPOINTS.BASE).toString();
//     setIsLoading(true);
//     try {
//       const booksData = await getEntityPublic(fullUrl);
//       setBooks(booksData);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }
// };

  if (isLoading)  return <Loader />;
  
  if (error) return <Error title="Oups..." message={error.message} />;

  return (
    <div className='bg-light' >
      <div className='container h-full mx-auto mt-20 relative px-2 md:px-0'>
          
          <Title text1="Trouvez votre pochain livre" level={1} custom1="font-light"/>
          <div className='grid grid-cols-[100px_3fr] md:grid-cols-[200px_3fr] gap-10 pt-2 pb-10'>
         
            
            <Filters values={filters}
                    onFilterChange={handleInputFilter}
                    onApplyFilters={handleResultFilter}
                    onResetFilters={handleResetFilters} />

            <section>
                <p className='border-b-2 border-primary50 '>Résultat de la rercherche : <span>{ books["hydra:totalItems"]} livre(s) trouvé(s)</span></p>

                <div className='flex justify-center flex-wrap gap-5 p-1 pt-5'>
                    { books && books["hydra:member"].map( ({id, title, YearPublished, bookCopies, contentUrl}) => (  
                       
                       <Card key={id}>
                               
                                <Card.Header pic={`${import.meta.env.VITE_BASE}${contentUrl}`} />
                             
                                <Card.Content className='flex flex-col px-4 pt-4 h-full'>
                                    <Card.Badge  type={ hasBookCopyWithStatus(bookCopies, "En Stock") ? "Disponible" : "Loué"} 
                                                 className={`${hasBookCopyWithStatus(bookCopies, "En Stock") ? "bg-green-300" : "bg-red-300"} text-xs self-start px-2 py-1 rounded-lg  `}/>
                                    <Card.Title  className='text md:text-md lg:text-lg  font-semibold pb-2'text1={title} level={4} />
                                    <Card.Description>Année : {YearPublished}</Card.Description>
                                </Card.Content>
                                <Card.Footer onDetailClick={handleDetailBook} onBookingClick={handleAddBook} id={id} hasStock={hasBookCopyWithStatus(bookCopies, "En Stock")} />
                            </Card>
                            )
                        )
                    }
                </div>
                 {/* <Pagination paginationButtons={PAGINATION_BUTTONS.map(({ key, title }) => ({key,title }))}
                             onPageChange={handlePaginationClick}
                             page={books['hydra:view']}/> */}
            </section>
          </div>
      </div>    
    </div>
  )
}
