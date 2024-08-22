import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

import SideMenu from "../../components/features/Admin/Dashboard/SideMenu";
import UserBar from "../../components/features/Admin/Dashboard/UserBar";

import { Provider } from "react-redux";
import store from "../../store";

export default function AdminLayout() {
  const { user } = useContext(AuthContext);

  return (
    <Provider store={store}>
      <div className="container mx-auto py-5 flex items-stretch h-full gap-2">
        <SideMenu />
        <div className="w-full">
          <UserBar user={user} />
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}
