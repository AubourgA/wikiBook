import { register } from 'swiper/element/bundle';
// import "../swiper/swiper.css";


// register Swiper custom elements
register()


import { useEffect, useState } from 'react';

export default function BookLatest( ) {

    const [lastBook, setLastBook] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // const response = await fetch("https://api-wikibook.adrienaubourg.fr/api/books", {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/books`, {
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
        setLastBook(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
}, []); // 



  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
 
    <swiper-container space-between="50" 
                      pagination="true"
                      slidesPerView="2"
                      breakpoints={JSON.stringify( {
                        640: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 4,
                          }
                      })} >
        { lastBook && 
         
                lastBook["hydra:member"].map( ({id, title, YearPublished}) => (  
                

                    <swiper-slide key={id} >
                        <div className='card hover:translate-y-1 transition-transform'>
                            
                                <img src="https://placehold.co/250x250" className='h-[250px] object-cover rounded-t' alt="" />
                             
                                <div className='flex flex-col px-4 p-4 h-full'>
                                  <h2 className='text md:text-md lg:text-lg  font-semibold pb-2'>{title}</h2>
                                  
                                  <p className='flex-grow'>Année de Publication : {YearPublished}</p>
                              
                                  <button className='rounded bg-secondary text-light btn-pressed p-2 w-full mt-2'>Détails</button>
                                </div>
                            </div>
                    
                    </swiper-slide>
                  
                )
            )
        }

     
    
  </swiper-container>
 
  )
}
