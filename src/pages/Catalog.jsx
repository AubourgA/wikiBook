import { useState, useEffect } from 'react';


import Card from "../components/ui/Card"
import Filters from '../components/features/filters/Filters';
import Loader from '../components/ui/Loader'

import { buildQueryParams } from "../utils/QueryBuilder"
import { getBooks } from '../api';
import { INITIAL_FILTERS_VALUE, PAGINATION_CATALOGS_BUTTONS } from '../Constants';
import Error from '../components/ui/Error/Error';
import Button from '../components/ui/Button';


export default function Catalog() {

  const [Books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState( INITIAL_FILTERS_VALUE)
    
  useEffect(() => {
   
     const fetchBooks = async () => {
            setIsLoading(true);
            try {
              const booksData = await getBooks(`${import.meta.env.VITE_API_URL}/books`);
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
  const apiUrl = `${import.meta.env.VITE_API_URL}/books?${queryParams}`;
  setIsLoading(true);
  try {
    const booksData = await getBooks(apiUrl);
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
    const booksData = await getBooks(`${import.meta.env.VITE_API_URL}/books`);
    setBooks(booksData);
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
};


const handlePaginationClick = async (path) => {
  if (path) {
    const apiUrl = import.meta.env.VITE_API_BASE; 
    const fullUrl = new URL(path, apiUrl).toString();
    setIsLoading(true);
    try {
      const booksData = await getBooks(fullUrl);
      setBooks(booksData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
};

  if (isLoading)  return <Loader />;
  
  if (error) return <Error title="Oups..." message={error.message} />;

  return (
    <div className='bg-light' >
      <div className='container h-full mx-auto mt-20 relative px-2 md:px-0'>
          <h1 className='font-primary text-2xl md:text-5xl text-dark py-8'>Trouvez votre pochain livre </h1>
          <div className='grid grid-cols-[100px_3fr] md:grid-cols-[200px_3fr] gap-10 pt-2 pb-10'>
         
            
            <Filters values={filters}
                    onFilterChange={handleInputFilter}
                    onApplyFilters={handleResultFilter}
                    onResetFilters={handleResetFilters} />

            <section>
                <p className='border-b-2 border-primary50 '>Résultat de la rercherche : <span>{ Books["hydra:totalItems"]} livre(s) trouvé(s)</span></p>

                <div className='flex justify-center flex-wrap gap-5 p-1 pt-5'>
                    { Books && Books["hydra:member"].map( ({id, title, YearPublished}) => (  
                          <Card key={id}>
                                <Card.Header>
                                <img src="https://placehold.co/250x250" className='w-full h-[250px] object-cover rounded-t' alt="" />
                                </Card.Header>
                                <Card.Content className='flex flex-col px-4 pt-4 h-full'>
                                    <Card.Title  className='text md:text-md lg:text-lg  font-semibold pb-2'>{title}</Card.Title>
                                    <Card.Description>Année : {YearPublished}</Card.Description>
                                </Card.Content>
                                <Card.Footer className='flex gap-2 pb-4 px-2'>
                                    <button className='border-2 border-primary100 rounded text-primary100 btn-pressed p-2 w-full mt-2'>Détail</button>
                                    <button className='rounded bg-secondary text-light btn-pressed p-2 w-full mt-2'>Réserver</button>
                                </Card.Footer>
                            </Card>
                            )
                        )
                    }
                </div>
           
                <div className='flex items-center justify-center gap-2 my-4'>  
                  {PAGINATION_CATALOGS_BUTTONS.map(({ key, title }) => (
                          Books["hydra:view"] && Books["hydra:view"][key] && (
                            <Button
                              key={key}
                              title={title}
                              type="button"
                              onButtonClick={() => handlePaginationClick(Books["hydra:view"][key])}
                              className='bg-primary50 p-1 rounded hover:bg-secondary'
                            />
                          )
                        ))}   
                </div>
            </section>

          </div>
      </div>    
    </div>
  )
}
