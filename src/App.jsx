import { RouterProvider } from 'react-router-dom'
import router from './Router/router';
import { AuthProvider } from './Context/AuthContext';


function App() {
  

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  ) 

}

export default App;