import MenuItem from "../../../ui/NavBar/MenuItem";
import { adminMenus, adminGestion, adminParams } from "../../../../Constants";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";


export default function SideMenu() {

  return (
    <aside className="fixed z-10 flex w-full sm:w-auto   sm:relative bottom-0 sm:flex-col justify-between bg-primary50 rounded p-4 max-h-[600px] ">
      <h1 className="hidden sm:block font-primary text-3xl text-dark font-bold">
        WIKIBOOK
      </h1>
      <div>
        <p className="hidden sm:flex items-center gap-2 font-bold">
          <MdDashboard />
          <span>Dashboard</span>{" "}
        </p>
        <ul className="flex sm:flex-col text-md  gap-2">
          {adminMenus.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div>
      <p className="hidden  sm:flex gap-2 items-center font-bold">
          <IoMdSettings /> Gestion
        </p>
        <ul className="flex sm:flex-col text-md gap-2">
            <MenuItem item={adminGestion} />
        </ul>
      </div>
      <div>
        <p className="hidden  sm:flex gap-2 items-center font-bold">
          <IoMdSettings /> Parametres
        </p>
        <ul className="flex sm:flex-col text-md gap-2">
          {adminParams.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </aside>
  

  );
}
