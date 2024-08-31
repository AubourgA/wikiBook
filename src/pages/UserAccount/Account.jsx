import useCurrentUser from '../../hooks/useCurrentUser';
import Loader from '../../components/ui/Loader';

export default function Account() {

  const { currentUser, loading, error } = useCurrentUser();
 
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  console.log(currentUser)
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
        <h1>Mon Compte Utilisateur</h1>
        <p>bienvenue : {currentUser.name}</p>
    </div>
  )
}
