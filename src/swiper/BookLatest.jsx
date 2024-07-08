import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register()

import { newsBook } from '../lib/constants';

export default function BookLatest( ) {

   
  return (
    <swiper-container 

    slides-per-view="3"  >
        {
            newsBook.map( ({id, title, category, available}) => (

                <swiper-slide key={id} >
                    <div className=' container mx-auto '>
                       

                            <img src="https://placehold.co/300x400" alt="" />
                            <h2 className='text-xl font-semibold'>{title}</h2>
                            
                            <p>Category : {category}</p>
                            <p>Actuellement : <span className='bg-green-400 rounded-lg p-1 text-sm'>{available}</span></p>
                            <button className='rounded bg-red-300 p-2 md:w-[300px] mt-2'>Réserver</button>
                        </div>
                  
                </swiper-slide>
            ) )
        }
     
    
  </swiper-container>
  )
}
