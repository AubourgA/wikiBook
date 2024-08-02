import { register } from 'swiper/element/bundle';


// register Swiper custom elements
register()


import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';
import Error from '../components/ui/Error/Error';
import { getBooks } from '../api';

export default function BookLatest( ) {

    const [lastBooks, setLastBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


useEffect(() => {
   
  const fetchLastBooks = async () => {
         setIsLoading(true);
         try {
           setLastBooks(await getBooks());
         } catch (error) {
           setError(error);
         } finally {
           setIsLoading(false);
         }
     }
   fetchLastBooks()
 }, []);




if (isLoading)  return <Loader />;
  
if (error) return <Error title="Oups..." message={error.message} />;

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
        { lastBooks && 
                lastBooks["hydra:member"].map( ({id, title, YearPublished}) => (  
                    <swiper-slide key={id} >
                             <Card key={id}>
                                <Card.Header pic="https://placehold.co/250x250" />
                                <Card.Content className='flex flex-col px-4 pt-4 h-full'>
                                    <Card.Title  className='text md:text-md lg:text-lg  font-semibold pb-2'>{title}</Card.Title>
                                    <Card.Description>Année : {YearPublished}</Card.Description>
                                </Card.Content>
                                <Card.Footer />
                            </Card>
                    </swiper-slide>
                )
            )
        }
  </swiper-container>
  )
}
