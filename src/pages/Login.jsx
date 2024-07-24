import { useState } from 'react'
import { authentification } from '../utils/apiRequest'
import { useNavigate } from 'react-router-dom';

const INITIAL_CREDENTIAL = {
  email :"",
  password :""
}


export default function Login() {

  const [credentials, setCredentials] = useState( INITIAL_CREDENTIAL )
  const navigate = useNavigate();

  const handleCredential = (e) => {
    const {name, value} = e.target
      setCredentials( {
        ...credentials,
        [name] : value
      })
  }

  const handleLogin = async (e) => {
        e.preventDefault()
       

         const token = await authentification(`${import.meta.env.VITE_API_AUTH}`, credentials)
        
         if (token) {
          navigate('/Dashboard');
        }

       
  }

  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
    <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  sm:grid-cols-2'>

        <form className='p-10' onSubmit={handleLogin} > 
            <h1 className='font-primary text-3xl text-dark'>Déja client</h1>
            <div className='flex flex-col pt-5 pb-2'>
              <label htmlFor="id">ID</label>
              <input  type="email"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleCredential}
                      className='text-sm p-2 rounded-xl' />
              {/* {errors.lastName && <p className="error">{errors.lastname}</p>} */}
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor="password">Password</label>
              <input  type="password"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleCredential}
                      className='text-sm p-2 rounded-xl' />
              {/* {errors.firstName && <p className="error">{errors.firstname}</p>} */}
            </div>
      
     
            <button type="submit" className='rounded-xl p-2 bg-primary100 w-full mt-2 text-light'>Se Connecter</button>
            <div>
              <p className=''>Vous n'étes pas encore client ?</p>
              <p><a href="">Créer votre espace client</a></p>
            </div>
        </form>
       
    </div>
    
</section>
  )
}
