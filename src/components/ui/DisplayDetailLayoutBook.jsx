
import Error from './Error/Error';
import Loader from './Loader';

import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import { API_ENDPOINTS } from '../../Constants';
import BookDetails from '../features/BookDetails';

export default function DisplayDetailLayoutBook( {title}) {

  let { id } = useParams()


 const { data: book, isLoading, error } = useFetch(API_ENDPOINTS.BOOKS, id);

 if (isLoading) return <Loader />;
 if (error) return <Error title="Oups..." message={error.message} />;

 return (
    <>
     
          <BookDetails title={title} data={book} />
  </>
  )
}