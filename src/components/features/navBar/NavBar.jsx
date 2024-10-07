import {motion} from 'framer-motion'
import { useState, useContext } from "react";
import { AuthContext } from '../../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import logo from "../../../assets/images/logo.svg";
import { itemNavs } from '../../../Constants';
import Image from '../../ui/Image';  
import Button from '../../ui/Forms/Button';  
import NavItem from '../../ui/NavBar/NavItem';  
import AuthButtons from './AuthButtons';  

export default function NavBar() {
  const { isLogged, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleOpenNav = () => setIsOpenNav(!isOpenNav);
  const handleCloseNav = () => setIsOpenNav(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3, // Délai basé sur l'index
        duration: 0.5,
      },
    }),
  };

  return (
    <nav className="fixed top-0 z-20 w-full px-2 bg-primary50 py-2 font-Secondary shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
      <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      custom={1} // Délai pour l'image
    >
        <Image img={logo} text="logo" className="w-[64px]" />
        </motion.div>
        <Button  type="button"
                category="nav"
                title={isOpenNav ? <FaTimes size={25} /> : <RxHamburgerMenu size={25} />}
                onButtonClick={handleOpenNav} />
        <ul className={`${isOpenNav ? "flex flex-col w-full items-center transition-all duration-300" : "hidden"} transition-all duration-300 ease-in-out md:flex md:flex-row gap-2`}>
          {itemNavs.map((item) => (
            
            <NavItem key={item.id} item={item} onClick={handleCloseNav}  />
   
          ))}
     </ul>
        <AuthButtons   isLogged={isLogged}
                        user={user}
                        logout={logout}
                        navigate={navigate}
                        handleCloseNav={handleCloseNav}
                        isOpenNav={isOpenNav} />
      </div>
    </nav>
  );
}
