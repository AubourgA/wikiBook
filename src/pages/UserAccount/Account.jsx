import { Outlet } from 'react-router-dom';
import UserBar from '../../components/features/Admin/Dashboard/UserBar';
import SideMenuUser from '../../components/features/UserAccount/SideMenuUser';


export default function Account() {


  return (
    <div className="container mx-auto py-5 flex items-stretch h-full gap-2">
        <SideMenuUser />
        <div className="w-full">
          <UserBar  />
          <Outlet />
        </div>
      </div>
  )
}


