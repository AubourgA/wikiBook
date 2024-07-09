import { register } from 'swiper/element/bundle';

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
        const response = await fetch("https://api-wikibook.adrienaubourg.fr/api/books", {
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

  console.log(lastBook)

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <swiper-container slides-per-view="3">
        { lastBook && 
         
                lastBook["hydra:member"].map( ({id, title, YearPublished}) => (  
                    <swiper-slide key={id} >
                        <div className=' container mx-auto '>
                        

                                <img src="https://placehold.co/300x400" alt="" />
                                <h2 className='text-xl font-semibold'>{title}</h2>
                                
                                <p>Année de Publication : {YearPublished}</p>
                            
                                <button className='rounded bg-red-300 p-2 md:w-[300px] mt-2'>Détails</button>
                            </div>
                    
                    </swiper-slide>
                )
            )
        }

     
    
  </swiper-container>
    </>
  )
}
