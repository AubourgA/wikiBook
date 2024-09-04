import { Outlet } from 'react-router-dom';
import UserBar from '../../components/features/Admin/Dashboard/UserBar';
import SideMenuUser from '../../components/features/UserAccount/SideMenuUser';


export default function Account() {
 
  

  return (
    <div className="container mx-auto  flex items-stretch gap-2 h-full py-5">
        <SideMenuUser />
        <div className="w-full">
          <UserBar  />
          <Outlet />
        </div>
      </div>
  )
}


