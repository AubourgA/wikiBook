//Root.jsx
import {Outlet} from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'

function Root() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );


}

export default Root;