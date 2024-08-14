import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { authentification } from '../api';


const AuthContext = createContext();


const AuthProvider = ( {children }) => {

    const [user, setUser] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    
    useEffect( ()=> {
        const token = localStorage.getItem('jwt-token')
        if(token) {
            try {
                const decoded = jwtDecode(token)
                setUser(decoded)
                setIsLogged(true)
            }catch (error) {
                console.error('Invalid token', error);
                localStorage.removeItem('jwt-token');
            }
        }
    },[])

    const login = async (userData) => {
        try {
         
          const token = await authentification(userData);
          if (token && token !== 'undefined') {
            localStorage.setItem('jwt-token', token);
            const decoded = jwtDecode(token);
            setUser(decoded);
            setIsLogged(true);
            return decoded;
          } else {
            throw new Error('Invalid token received');
          } 
        }catch (error) {
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
