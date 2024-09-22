import { register } from 'swiper/element/bundle';


// register Swiper custom elements
register()


import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';
import Error from '../components/ui/Error/Error';
import { getEntityPublic } from '../api';
import { API_ENDPOINTS } from '../Constants';
import { useNavigate } from 'react-router-dom';

export default function BookLatest( ) {

    const [lastBooks, setLastBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

useEffect(() => {
   
  const fetchLastBooks = async () => {
         setIsLoading(true);
         try {
           setLastBooks(await getEntityPublic(API_ENDPOINTS.BOOKS));
         } catch (error) {
           setError(error);
         } finally {
           setIsLoading(false);
         }
     }
   fetchLastBooks()
 }, []);


 const handleDetailBook = (id) => {
  navigate(`/Catalogs/${id}`)
}
console.log(lastBooks)
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
                lastBooks["hydra:member"].map( ({id, title, YearPublished, ISBN}) => (  
                    <swiper-slide key={id} >
                             <Card key={id}>
                                <Card.Header pic={`https://covers.openlibrary.org/b/isbn/${ISBN}-L.jpg`} />
                                <Card.Content className='flex flex-col px-4 pt-4 h-full'>
                                <Card.Title  className='text md:text-md lg:text-lg  font-semibold pb-2'text1={title} level={4} />
                                    <Card.Description>Année : {YearPublished}</Card.Description>
                                </Card.Content>
                                <Card.Footer onDetailClick={handleDetailBook} id={id} />
                            </Card>
                    </swiper-slide>
                )
            )
        }
  </swiper-container>
  )
}
