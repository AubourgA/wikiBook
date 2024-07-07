//Router.jsx
import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import PageError from "../pages/PageError";
import News from '../pages/News';
import Catalog from '../pages/Catalog';
import Root from '../pages/Root';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Subscribe from '../pages/Subscribe';

 
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
    ],
  },
]);

export default router;
