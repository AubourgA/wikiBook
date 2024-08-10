//Router.jsx
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import PageError from "../pages/PageError";
import News from "../pages/News";
import Catalog from "../pages/Catalog";
import Root from "../pages/Root";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Subscribe from "../pages/Subscribe";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Account from "../pages/UserAccount/Account";
import AdminBooks from "../components/features/Admin/AdminBooks";
import AdminHome from '../pages/Admin/AdminHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Catalogs",
        element: <Catalog />,
      },
      {
        path: "/News",
        element: <News />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Subscribe",
        element: <Subscribe />,
      },
      {
        path: "/Dashboard",
        element: (
          <PrivateRoute roles={["ROLE_ADMIN"]}>
            <Dashboard />
          </PrivateRoute>
        ),

        children: [
          { path: "/Dashboard/Home", element: <AdminHome /> },
          { path: "/Dashboard/Books", element: <AdminBooks /> },
        ],
      },
      {
        path: "/Account",
        element: (
          <PrivateRoute roles={["ROLE_USER"]}>
            <Account />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
