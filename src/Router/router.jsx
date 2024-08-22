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
import AdminLayout from "../pages/Admin/AdminLayout";
import PrivateRoute from "./PrivateRoute";
import Account from "../pages/UserAccount/Account";
import AdminBooks from "../pages/Admin/AdminBooks";
import AdminHome from "../pages/Admin/AdminHome";
import AdminAuhors from "../pages/Admin/AdminAuhors";
import AdminGenres from "../pages/Admin/AdminGenres";
import AdminDisplayForms from "../components/features/Admin/Forms/AdminDisplayForms";

import AuthorForm from "../components/features/Admin/Authors/AuthorForm";
import BookForm from "../components/features/Admin/Books/BookForm";
import GenresForm from '../components/features/Admin/Genres/GenresForm';

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
            <AdminLayout />
          </PrivateRoute>
        ),

        children: [
          { path: "/Dashboard/Home", element: <AdminHome /> },
          { path: "/Dashboard/Books", element: <AdminBooks /> },
          {
            path: "/Dashboard/Books/New", element: (<AdminDisplayForms  title="Créer un ouvrage" FormComponent={BookForm} />
            ),
          },
          {
            path: "/Dashboard/Books/Update/:id", element: (<AdminDisplayForms  title="Mise a jour d'un auteur" FormComponent={BookForm}/>
            ),
          },
          { path: "/Dashboard/Authors", element: <AdminAuhors /> },    
           {
            path: "/Dashboard/Authors/New",
            element: (<AdminDisplayForms  title="Créer un auteur" FormComponent={AuthorForm}  /> ),
          },
          {
            path: "/Dashboard/Authors/Update/:id",
            element: (
              <AdminDisplayForms
                title="Mise a jour d'un auteur"
                FormComponent={AuthorForm}
              />
            ),
          },
          { path: "/Dashboard/Genres", element: <AdminGenres /> },
          {
            path: "/Dashboard/Genres/New", element: (<AdminDisplayForms  title="Créer un nouveau genre" FormComponent={GenresForm} />
            ),
          },
          {
            path: "/Dashboard/Genres/Update/:id",
            element: ( <AdminDisplayForms title="Mise a jour d'un genre" FormComponent={GenresForm} /> ),
          },
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
