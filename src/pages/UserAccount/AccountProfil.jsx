import UserInfo from '../../components/features/UserAccount/Profil/UserInfo';
import UserSettings from '../../components/features/UserAccount/Profil/UserSettings';
import Error from '../../components/ui/Error/Error';
import Loader from '../../components/ui/Loader';
import useCurrentUser from '../../hooks/useCurrentUser';


export default function AccountProfil() {

  const {currentUser, isLoading, error} = useCurrentUser()


  if (!currentUser) return null;

 if (isLoading) return <Loader />

 if(error) return <Error title="ERROR" message={error.message} />
  return (
    <div className='flex-col m-2  sm:flex sm:flex-row justify-center gap-2 mt-2'>
        <UserInfo user={currentUser} />
        <UserSettings />
    </div>
  )
}

