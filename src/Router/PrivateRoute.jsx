import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'

const PrivateRoute = ({ children, roles }) => {
  const token = localStorage.getItem('jwt-token');

  // Redirection vers la page de login si le token n'est pas présent
  if (!token) {
    return <Navigate to="/Login" />;
  }

  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    // Si la décodification échoue, redirige vers la page de login
    return <Navigate to="/Login" />;
  }

  const userRoles = decodedToken.roles; // Supposons que 'roles' est un tableau dans le token
  const tokenExpiry = decodedToken.exp; // Supposons que le champ 'exp' contient la date d'expiration en timestamp

  // Vérifie si le token est expiré
  if (tokenExpiry * 1000 < Date.now()) {
    localStorage.removeItem('jwt-token'); // Supprime le token expiré
    return <Navigate to="/Login" />;
  }

  // Vérifie si l'utilisateur a l'un des rôles requis
  if (roles && !roles.some((role) => userRoles.includes(role))) {
    return <Navigate to="/" />; // Redirection si le rôle ne correspond pas
  }

  // Si tout est correct, rendre les enfants du composant
  return children;
};

export default PrivateRoute;