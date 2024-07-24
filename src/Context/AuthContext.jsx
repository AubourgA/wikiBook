import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import { authentification } from '../utils/apiRequest';


const AuthContext = createContext();


const AuthProvider = ( {children }) => {

    const [user, setUser] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    
    useEffect( ()=> {
        const token = localStorage.getItem('jwt-token')
        if(token) {
            const decoded = jwtDecode(token)
            setUser(decoded)
        }
    },[])

    const login = async (userData) => {
        try {
          const token = await authentification(`${import.meta.env.VITE_API_AUTH}`, userData);
        
          localStorage.setItem('jwt-token', token);
          const decoded = jwtDecode(token);
          setUser(decoded);
          setIsLogged(true);
        } catch (error) {
          console.error('Login failed', error);
        }
      };

    const logout = (navigate) => {
        localStorage.removeItem('jwt-token');
        setUser(null);
        setIsLogged(false)
        navigate('/')
    }

    return (
        <AuthContext.Provider value={ { user, isLogged, logout, login }} >
            {children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider}
