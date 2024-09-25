import { useParams } from 'react-router-dom';
import Title from '../../../ui/Title';
import useFetch from '../../../../hooks/useFetch';
import { API_ENDPOINTS } from '../../../../Constants';
import Loader from '../../../ui/Loader';
import Error from '../../../ui/Error/Error';
import AdminProfilUser from './AdminProfilUser';
import AdminBooksUser from './AdminBooksUser';


export default function AdminUserDetailsLayout() {

  let { id } = useParams()

  const { data: detailUser, isLoading, error } = useFetch(API_ENDPOINTS.USERS, id);


  if (isLoading) return <Loader />;
  if(error)  return <Error title='Error' message={error.message} />

  return (
    <div className="bg-blue-100 p-4 rounded my-2 ">
        <div className="flex justify-between items-center border-light border-b-2">
          <Title level={1} text1="Fiche de l'utilisateur" />
        </div>
      

        { detailUser ?  <div className='grid grid-cols-1 gap-2'>
                        <AdminProfilUser  data={detailUser}/>
                        <AdminBooksUser data={detailUser.loans} />
                 </div> 
                : <p>pas de données</p>
        }
  </div>
  )
}
