import { AuthContext } from "../../../Context/AuthContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

import SideMenu from "./SideMenu";
import UserBar from './UserBar';

export default function Dashboard() {
  const { user } = useContext(AuthContext);



  return (
    <div className="container mx-auto py-5 flex items-stretch h-full gap-2">

       <SideMenu />
      
      <div className='w-full' >
          <UserBar user={user}/>
          <Outlet />
      </div>
    </div>
  );
}
