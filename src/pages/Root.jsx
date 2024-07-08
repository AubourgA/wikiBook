//Root.jsx
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Root() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );


}

export default Root;