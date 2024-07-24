import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react';

export default function Account() {
    const { user } = useContext(AuthContext);

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
        <h1>Mon Compte Utilisateur</h1>
        <p>bienvenue : {user.username}</p>
    </div>
  )
}
