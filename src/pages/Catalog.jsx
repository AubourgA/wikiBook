
import Card from "../components/ui/Card"


import { TbFilterSearch } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

import { useState, useEffect } from 'react';

export default function Catalog() {

  const [Books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    
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
        console.log(data)
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

const handlePaginationClick = (path) => {
  if (path) {
    const apiUrl = import.meta.env.VITE_API_BASE; 
    const fullUrl = new URL(path, apiUrl).toString();
    fetchArticles(fullUrl);
  }
};

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
            <aside className="flex flex-col gap-4"> 
              <div className='flex justify-between items-center bg-dark text-light p-2 rounded'>

                  <p className='text-sm md:text-md'>Filtres</p>
                  <TbFilterSearch />
              </div>
            <div className='flex justify-between items-center bg-primary50 text-dark p-2 rounded'>
                <p className='text-sm md:text-md'>Titre</p>
                <IoIosArrowForward />
              </div>
              <div className='flex justify-between items-center bg-primary50 text-dark p-2 rounded'>
                <p className='text-sm md:text-md'>Auteur</p>
                <IoIosArrowForward />
              </div>
              <div className='flex justify-between items-center bg-primary50 text-dark p-2 rounded'>
                <p className='text-sm md:text-md'>Année</p>
                <IoIosArrowForward />
              </div>
              <div className='flex justify-between items-center bg-primary50 text-dark p-2 rounded'>
                <p className='text-sm md:text-md'>Genre</p>
                <IoIosArrowForward />
              </div>
              
                <button className='flex justify-between items-center border border-secondary p-2 rounded btn-pressed text-secondary text-sm md:text-md'>
                Reset
                <GrPowerReset />
                </button>

              <button className='flex justify-between items-center bg-secondary p-2 rounded btn-pressed text-light text-sm md:text-md'>
                Appliquer
                <CiSearch />
                </button>
            </aside>

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
                    <p>Page :</p>
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
