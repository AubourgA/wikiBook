import LastBookLoans from '../../components/features/UserAccount/LastBookLoans';
import UserBookPreferences from '../../components/features/UserAccount/UserBookPreferences';
import InfoSide from '../../components/features/UserAccount/InfoSide';
import Loader from '../../components/ui/Loader';
import useCurrentUser from '../../hooks/useCurrentUser';


export default function AccountHome() {

  const { currentUser, loading, error } = useCurrentUser();

    
 if (loading) return <Loader />;
 if (error) return <div>Error: {error}</div>;

  return (
    <div className='grid  grid-cols-1 sm:grid-cols-8 sm:grid-auto-rows gap-2 h-full py-2'>
      <div className='order-1 col-span-6 p-2 rounded-lg sm:order-1'>
          <UserBookPreferences user={currentUser} />
      </div>
      <div className='order-0 col-span-6 sm:col-span-2 sm:row-span-2 p-2 rounded-md sm:order-2'>

        <InfoSide user={currentUser} />
      </div>
      <div className=' order:3 sm:col-span-6 p-2  sm:order-3'>
        <LastBookLoans user={currentUser} />
      </div>
    </div>
  )
}
