import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../Context/AuthContext';
import SignIn from '../components/features/forms/SignIn.form';
import Image from '../components/ui/Image'
import { validateLoginForm } from '../utils/checkDataForms';
import imageLogin from '../assets/images/login.webp'

const INITIAL_CREDENTIAL = {
  email :"",
  password :""
}


export default function Login() {

  const [credentials, setCredentials] = useState( INITIAL_CREDENTIAL )
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleCredential =() => (e) => {
    const {name, value} = e.target
      setCredentials( {
        ...credentials,
        [name] : value
      })
  }

  const handleLogin = async (e) => {
        e.preventDefault()
        const validationErrors = validateLoginForm(credentials);
       
        setErrors(validationErrors)
       
       if(Object.keys(validationErrors).length > 0) return;

       try {

         const loggedInUser = await login(credentials)
         
         if(loggedInUser) {
  
              if (loggedInUser.roles.includes('ROLE_ADMIN')) {
                navigate('/Dashboard/Home');
              } else {
                navigate('/Account/Home');
              }
         } else {
          setErrors({ general: 'Connexion échouée. Veuillez vérifier vos identifiants.' });
         }
       } catch (error) {
        console.error('Erreur de connexion', error);
        setErrors({ general: 'Une erreur est survenue lors de la connexion.' });
       }
       
  }

  return (
    <section className='flex justify-center  items-center bg-primary50/25 py-20'>
        <div className='grid grid-cols-1 grid-rows-1 p-8 max-w-sm md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  md:grid-cols-2'>
          <div>
            <SignIn onSubmit={handleLogin}
                  onChange={handleCredential} datas={credentials} errors={errors} />
            <div className='flex flex-col place-items-center p-2'>
                <p className='text-gray-400'>Vous n'étes pas encore client ?</p>
                <Link to="/Subscribe" className='text-sm border border-primary100 rounded px-4 py-1 text-primary100'>Créer un compte</Link>
            </div>
          </div>
         <Image img={imageLogin} text="photo login" className='w-[75%] m-auto'/>
        </div>
</section>
  )
}
