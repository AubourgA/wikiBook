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
import Dashboard from "../pages/Admin/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Account from "../pages/UserAccount/Account";
import AdminBooks from "../pages/Admin/Books/AdminBooks";
import AdminHome from "../pages/Admin/AdminHome";
import AdminAuhors from '../pages/Admin/Authors/AdminAuhors';

import AdminBooksAction from '../pages/Admin/Books/AdminBooksAction';
import AdminAuthorAction from '../pages/Admin/Authors/AdminAuthorAction';
import AdminGenres from '../pages/Admin/Genres/AdminGenres';


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
          { path: "/Dashboard/Books/New", element: <AdminBooksAction title="Créer un ouvrage"/> },
          { path: "/Dashboard/Books/Update/:id", element: <AdminBooksAction title="Modifier un ouvrage" /> },
          { path: "/Dashboard/Authors", element: <AdminAuhors /> },
          { path: "/Dashboard/Authors/New", element: <AdminAuthorAction title="Créer un auteur"/> },
          { path: "/Dashboard/Authors/Update/:id", element: <AdminAuthorAction title="Modifier un auteur" /> },
          { path: "/Dashboard/Genres", element: <AdminGenres /> },
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
