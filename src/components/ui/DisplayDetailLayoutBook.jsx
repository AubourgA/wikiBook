
import Error from './Error/Error';
import Loader from './Loader';

import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import { API_ENDPOINTS } from '../../Constants';
import BookDetails from '../features/BookDetails';

import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react';

import Title from './Title';
import BookDetailsTabs from '../features/Admin/Books/BookDetailsTabs';

export default function DisplayDetailLayoutBook( {title}) {

  let { id } = useParams()
  const { user } = useContext(AuthContext);

 const { data: book, isLoading, error } = useFetch(API_ENDPOINTS.BOOKS, id);

 if (isLoading) return <Loader />;
 if (error) return <Error title="Oups..." message={error.message} />;

 return (
 
     <section className="bg-blue-100 p-4 rounded my-2 ">
          <div className="flex justify-between items-center border-light border-b-2">
            <Title level={1} text1={title} />
          </div>
          <BookDetails  data={book} user={user}/>
          {
            user?.roles.includes('ROLE_ADMIN') && <BookDetailsTabs data={book.bookCopies} id={book.id} />
          }
     </section>
     
 
  )
}