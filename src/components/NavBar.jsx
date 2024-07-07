import { useState} from "react";
import { NavLink } from 'react-router-dom';
import { itemNav } from '../lib/constants';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {

 const [isOpenNav, setIsOpenNav] = useState(false)

  const handleOpenNav = () => setIsOpenNav(!isOpenNav)

  const handleCloseNav = () => setIsOpenNav(false)

  return (
    <nav className="fixed top-0 w-full px-2 bg-primary100 py-2 font-Secondary">
        <div className="flex  items-center justify-between flex-wrap">

            <div>
                <img src="" alt="logo" />
            </div>
          
            <button 
            onClick={handleOpenNav}
            className="cursor-pointer md:hidden">
              { isOpenNav ? <FaTimes size={25} /> :<RxHamburgerMenu size={25}/> }
            </button>
            <ul className= {`${isOpenNav ? "flex flex-col w-full items-center transition-all duration-300" : "hidden" }   transition-all duration-300 ease-in-out md:flex  md:flex-row gap-2`}>
                {itemNav.map( item => (
                <NavLink key={item.id} 
                          to={item.url}
                          className={({ isActive }) =>
                            `relative inline-block text-gray-800 hover:text-gray-500 duration-300 
                              ${isActive ? 'border-b-2' : 'hover:after:scale-x-100'}
                               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 after:ease-in-out `
                          }
                          onClick={handleCloseNav}>{item.title}</NavLink>
                ))}
            </ul>
            <div  className= {`${isOpenNav ? "flex flex-col w-full items-center mt-4" : "hidden" }   md:flex md:flex-row md:items-center gap-2`}>
                <NavLink to="/Subscribe" 
                        className="text-white rounded-xl border p-2 hover:text-gray-500 duration-300"
                        onClick={handleCloseNav} >Inscription</NavLink>
                <NavLink to="/Login" 
                         className="rounded-xl bg-white text-slate-500 p-2 transform transition-transform duration-150 hover:translate-y-1 hover:shadow-inner"
                         onClick={handleCloseNav}>Se Connecter</NavLink>
            </div>
        </div>
        
    </nav>
  )
}
