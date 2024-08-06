import MenuItem from "../../../components/ui/NavBar/MenuItem";
import { adminMenus, adminParams } from "../../../Constants";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

export default function SideMenu() {
  return (
    <aside className="relative flex flex-col justify-between bg-primary50 rounded p-4 ">
      <h1 className="hidden sm:block font-primary text-3xl text-dark font-bold">WIKIBOOK </h1>
      <div>
          <p className='hidden sm:flex items-center gap-2 font-bold'><MdDashboard /><span>Dashboard</span> </p>
          <ul className="flex flex-col text-md  gap-2">
            {adminMenus.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </ul>
      </div>
      <div>
        <p className='hidden sm:flex gap-2 items-center font-bold'><IoMdSettings /> Parametres</p>
        <ul className="flex flex-col text-md gap-2">
          {adminParams.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
