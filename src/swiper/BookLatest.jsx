import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register()


import { useEffect, useState } from 'react';

export default function BookLatest( ) {

    const [lastBook, setLastBook] = useState([])

  useEffect( ()=> {
      fetch("https://api-wikibook.adrienaubourg.fr/api/books", {
        method: "GET",
        mode:'cors',
        headers: {
            Accept: "application/ld+json"
        }

      }).then( resp => resp.json())
      .then( data => setLastBook(data))
  },[])
   


  return (
    <swiper-container 

    slides-per-view="3"  >
        {
            // newsBook.map( ({id, title}) => (
                lastBook["hydra:member"].map( ({id, title, YearPublished}) => (  
                <swiper-slide key={id} >
                    <div className=' container mx-auto '>
                       

                            <img src="https://placehold.co/300x400" alt="" />
                            <h2 className='text-xl font-semibold'>{title}</h2>
                            
                            <p>Année de Publication : {YearPublished}</p>
                           
                            <button className='rounded bg-red-300 p-2 md:w-[300px] mt-2'>Détails</button>
                        </div>
                  
                </swiper-slide>
            ) )
        }

     
    
  </swiper-container>
  )
}
