//Root.jsx
import {Outlet} from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'

function Root() {
  return (
    <div className='flex flex-col h-screen'>
      <header>
        <NavBar />
      </header>
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );


}

export default Root;