import { useState, useContext } from "react";
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { NavLink } from "react-router-dom";
import { itemNav } from "../../lib/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.svg"
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function NavBar() {
  const { isLogged, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleOpenNav = () => setIsOpenNav(!isOpenNav);

  const handleCloseNav = () => setIsOpenNav(false);


  return (
    <nav className="fixed top-0 z-10 w-full px-2 bg-primary50 py-2 font-Secondary shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div>
          <img src={logo} alt="logo"  className='w-[64px]'/>
        </div>

        <button onClick={handleOpenNav} className="cursor-pointer md:hidden">
          {isOpenNav ? <FaTimes size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
        <ul
          className={`${
            isOpenNav
              ? "flex flex-col w-full items-center transition-all duration-300"
              : "hidden"
          }   transition-all duration-300 ease-in-out md:flex  md:flex-row gap-2`}
        >
          {itemNav.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={({ isActive }) =>
                `relative inline-block text-dark duration-300 
                              ${
                                isActive
                                  ? "text-secondary font-semibold"
                                  : "hover:after:scale-x-100"
                              }
                               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-secondary after:origin-left after:transition-transform after:duration-300 after:ease-in-out `
              }
              onClick={handleCloseNav}
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
        {
          isLogged ? (
                 <div className='flex items-center gap-2'>
                  <NavLink to={ user?.roles.includes('ROLE_ADMIN') ? "/Dashboard" : "/Account"}>Mon Espace</NavLink>
                   <button className='flex items-center gap-1 text-secondary rounded-xl border border-secondary p-2 btn-pressed'
                       onClick={()=>logout(navigate)}><RiLogoutCircleRLine /> Se déconnecter</button> 
                  </div>):
                   (
                  <div
                      className={`${
                        isOpenNav ? "flex flex-col w-full items-center mt-4" : "hidden"
                      }   md:flex md:flex-row md:items-center gap-2`}
                    >
                      <NavLink
                        to="/Subscribe"
                        className="text-secondary rounded-xl border border-secondary p-2 btn-pressed"
                        onClick={handleCloseNav}
                      >
                        Inscription
                      </NavLink>
                      <NavLink
                        to="/Login"
                        className="rounded-xl bg-secondary text-light p-2 btn-pressed"
                        onClick={handleCloseNav}
                      >
                        Se Connecter
                      </NavLink>
                </div>)
        }
      </div>
    </nav>
  );
}
