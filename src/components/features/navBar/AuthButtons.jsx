import { NavLink } from 'react-router-dom';
import Button from '../../ui/Button';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const AuthButtons = ({ isLogged, user, logout, navigate, handleCloseNav, isOpenNav }) => (
  isLogged ? (
    <div className='flex items-center gap-2'>
      <NavLink to={user?.roles.includes('ROLE_ADMIN') ? "/Dashboard" : "/Account"}>Mon Espace</NavLink>
      <Button
        type="button"
        title="Se déconnecter"
        onButtonClick={() => logout(navigate)}
        className="flex-row-reverse gap-1 text-secondary rounded-xl border border-secondary md:text-base"
        icon={RiLogoutCircleRLine}
      />
    </div>
  ) : (
    <div className={`${isOpenNav ? "flex flex-col w-full items-center mt-4" : "hidden"} md:flex md:flex-row md:items-center gap-2`}>
      <NavLink
        to="/Subscribe"
        className="text-secondary rounded-xl border border-secondary px-4 py-2 btn-pressed"
        onClick={handleCloseNav}
      >
        Inscription
      </NavLink>
      <NavLink
        to="/Login"
        className="rounded-xl bg-secondary text-light px-4 py-2 btn-pressed"
        onClick={handleCloseNav}
      >
        Se Connecter
      </NavLink>
    </div>
  )
);

export default AuthButtons;
