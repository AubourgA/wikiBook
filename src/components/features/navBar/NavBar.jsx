import { useState, useContext } from "react";
import { AuthContext } from '../../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import logo from "../../../assets/images/logo.svg";
import { itemNavs } from '../../../Constants';
import Image from '../../ui/Image';  
import Button from '../../ui/Button';  
import NavItem from '../../ui/NavBar/NavItem';  
import AuthButtons from './AuthButtons';  

export default function NavBar() {
  const { isLogged, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleOpenNav = () => setIsOpenNav(!isOpenNav);
  const handleCloseNav = () => setIsOpenNav(false);

  return (
    <nav className="fixed top-0 z-10 w-full px-2 bg-primary50 py-2 font-Secondary shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Image img={logo} alt="logo" className="w-[64px]" />
        <Button
          type="button"
          title={isOpenNav ? <FaTimes size={25} /> : <RxHamburgerMenu size={25} />}
          onButtonClick={handleOpenNav}
          className="cursor-pointer border-none md:hidden"
        />
        <ul className={`${isOpenNav ? "flex flex-col w-full items-center transition-all duration-300" : "hidden"} transition-all duration-300 ease-in-out md:flex md:flex-row gap-2`}>
          {itemNavs.map((item) => (
            <NavItem key={item.id} item={item} onClick={handleCloseNav} />
          ))}
        </ul>
        <AuthButtons
          isLogged={isLogged}
          user={user}
          logout={logout}
          navigate={navigate}
          handleCloseNav={handleCloseNav}
          isOpenNav={isOpenNav}
        />
      </div>
    </nav>
  );
}
