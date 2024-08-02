//Root.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../components/features/navBar/NavBar";
import Footer from "../components/features/footer/Footer";

function Root() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <Footer text="WIKIBOOK" />
    </div>
  );
}

export default Root;
