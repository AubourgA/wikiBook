
import Card from "../components/ui/Card"
import Filters from '../components/features/Filters';

import { buildQueryParams } from "../utils/QueryBuilder"

import { useState, useEffect } from 'react';

const INITIAL_FILTERS_STATE = ({
  title:"",
  author:"",
  YearPublished:"",
  genre:""
})

export default function Catalog() {

  const [Books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState( INITIAL_FILTERS_STATE)
    

    const fetchArticles = async (url) => {
      try {

        const response = await fetch(url, {
            method: "GET",
            mode: 'cors',
            headers: {
                Accept: "application/ld+json"
            }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };



  useEffect(() => {
    fetchArticles(`${import.meta.env.VITE_API_URL}/books`);
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
  fetchArticles(apiUrl)
};

const handleResetFilters = () =>  {
  setFilters( INITIAL_FILTERS_STATE)
  fetchArticles(`${import.meta.env.VITE_API_URL}/books`)
}

const handlePaginationClick = (path) => {
  if (path) {
    const apiUrl = import.meta.env.VITE_API_BASE; 
    const fullUrl = new URL(path, apiUrl).toString();
    fetchArticles(fullUrl);
  }
};


  //  result conditional
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className='bg-light' >
      <div className='container h-full mx-auto mt-20 relative px-2 md:px-0'>
          <h2 className='font-primary text-2xl md:text-5xl text-dark py-8'>Trouvez votre pochain livre </h2>
          <div className='grid grid-cols-[100px_3fr] md:grid-cols-[200px_3fr] gap-10 pt-2 pb-10'>
         
            {/* filtre section */}
            <Filters filters={filters}
                    onFilterChange={handleInputFilter}
                    onApplyFilters={handleResultFilter}
                    onResetFilters={handleResetFilters} />

            {/* contenu recherche */}
            <section>
                <h2 className='border-b-2 border-primary50 '>Résultat de la rercherche : <span>{ Books["hydra:totalItems"]} livre(s) trouvé(s)</span></h2>

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
                {/* hydra view */}
        
                <div className='flex items-center justify-center gap-2 my-4'>
                   
                    {Books["hydra:view"] && Books["hydra:view"]["hydra:first"] && (
                      <button className="bg-primary50 p-1 rounded hover:bg-secondary" 
                              onClick={() => handlePaginationClick(Books["hydra:view"]["hydra:first"])}>
                        1
                      </button>
                    )}
                {Books["hydra:view"] && Books["hydra:view"]["hydra:previous"] && (
                  <button className="bg-primary50 p-1 rounded hover:bg-secondary" 
                          onClick={() => handlePaginationClick(Books["hydra:view"]["hydra:previous"])}>
                    précédente
                  </button>
                   )}
                {Books["hydra:view"] && Books["hydra:view"]["hydra:next"] && (
                  <button className="bg-primary50 p-1 rounded hover:bg-secondary"
                          onClick={() => handlePaginationClick(Books["hydra:view"]["hydra:next"])}>
                    Suivante
                  </button>
                )}
              {Books["hydra:view"] && Books["hydra:view"]["hydra:last"] && (
                <button className="bg-primary50 p-1 rounded hover:bg-secondary" 
                        onClick={() => handlePaginationClick(Books["hydra:view"]["hydra:last"])}>
                  Derniere
                </button>
              )}
              
              </div>
            </section>

          </div>
      </div>    
    </div>
  )
}
