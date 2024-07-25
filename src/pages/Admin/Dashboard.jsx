import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react';
// import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {

  const { user } = useContext(AuthContext);

  
 
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
        <h1>dashboard</h1>
        <p>bienvenue : {user?.username}</p>
       
       {/* A STRUCTURER  */}
        {/* <Outlet/> */}
    </div>
  )
}
