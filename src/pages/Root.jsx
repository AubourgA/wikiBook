//Root.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../components/features/navBar/NavBar";
import Footer from "../components/features/footer/Footer";
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

function Root() {

  const { user } = useContext(AuthContext);

  console.log(user)
  return (
    <div className="flex flex-col h-screen">
      <header>
        <NavBar />
      </header>
      <main className="grow pt-[74px] ">
        <Outlet />
      </main>
 
      {!user || !user.roles.includes('ROLE_ADMIN') ? <Footer text="WIKIBOOK" /> : null}
    </div>
  );
}

export default Root;
