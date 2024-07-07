//Root.jsx
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'

function Root() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );


}

export default Root;