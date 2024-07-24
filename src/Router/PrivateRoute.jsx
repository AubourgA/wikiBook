import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';







const PrivateRoute = ({ children, role }) => {
//   const token = Cookies.get('token');
  const token = localStorage.getItem('jwt-token');

  if (!token) {
    return <Navigate to="/Login" />;
  }

  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.roles; // Supposons que le rôle soit stocké dans le JWT
  console.log(decodedToken.roles)

  if (role && !role.includes(userRole)) {
    console.log(role)
    return <Navigate to="/unauthorized" />;
  }



  return children;
};

export default PrivateRoute;