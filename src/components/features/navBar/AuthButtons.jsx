import { NavLink } from 'react-router-dom';
import Button from '../../ui/Forms/Button';
import { RiLogoutCircleRLine } from 'react-icons/ri';

import { bool,func, object } from 'prop-types';


const AuthButtons = ({ isLogged, user, logout, navigate, handleCloseNav, isOpenNav }) => (
  isLogged ? (
    <div className={`${isOpenNav ? "flex flex-col w-full items-center mt-4" : "hidden"  } md:flex items-center gap-2`}>
      <NavLink to={user?.roles.includes('ROLE_ADMIN') ? "/Dashboard" : "/Account"}
              className={({ isActive }) =>
                `relative inline-block text-dark duration-300 
                 ${isActive
                    ? "text-secondary font-semibold"
                    : "hover:after:scale-x-100"}
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-secondary after:origin-left after:transition-transform after:duration-300 after:ease-in-out `} >Mon Espace</NavLink>
     
      <Button  type="button"
              title="Se déconnecter"
              onButtonClick={() => logout(navigate)}
              category="nav-user"
              icon={RiLogoutCircleRLine} />
    </div>)
       : (
        <div className={`${isOpenNav ? "flex flex-col w-full items-center mt-4" : "hidden"} md:flex md:flex-row md:items-center gap-2`}>
          <NavLink to="/Subscribe"
                  className="text-secondary rounded-xl border border-secondary px-4 py-2 btn-pressed"
                  onClick={handleCloseNav} >
                  Inscription
          </NavLink>
          <NavLink to="/Login"
                  className="rounded-xl bg-secondary text-light px-4 py-2 btn-pressed"
                  onClick={handleCloseNav} >
                   Se Connecter
          </NavLink>
        </div>
       )
);

export default AuthButtons;


AuthButtons.propTypes = {
  isLogged:bool.isRequired,
  user: object,
   logout: func.isRequired,
    navigate:func,
   handleCloseNav:func,
   isOpenNav: bool
  
}