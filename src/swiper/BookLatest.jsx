import { register } from 'swiper/element/bundle';

register()

import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';
import Error from '../components/ui/Error/Error';
import { API_ENDPOINTS } from '../Constants';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function BookLatest( ) {


  const {data : lastBooks, isLoading, error} = useFetch(`${API_ENDPOINTS.BOOKS}?order[createdAt]=DESC`)
    
  const navigate = useNavigate();

  const handleDetailBook = (id) => navigate(`/Catalogs/${id}`)

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
                lastBooks["hydra:member"].map( ({id, title, YearPublished, contentUrl}) => (  
                    <swiper-slide key={id} >
                             <Card key={id}>
                                <Card.Header pic={`${import.meta.env.VITE_BASE}/${contentUrl}`} />
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
