import { userMenus } from "../../../Constants";

import Image from '../../ui/Image'
import MenuItem from "../../ui/NavBar/MenuItem";
import picBar from "../../../assets/images/picBar.svg"

export default function SideMenuUser() {


    return (
    <aside className="fixed z-10 flex  w-full sm:w-auto sm:relative bottom-0 sm:flex-col justify-between bg-primary50 rounded p-4 max-h-[600px] ">
    <h1 className="hidden sm:block font-primary text-3xl text-dark font-bold">
      WIKIBOOK
    </h1>
    <div>
    
      <ul className="flex sm:flex-col text-md  gap-2">
        {userMenus.map( item => (
            <MenuItem  key={item.id} item={item} />
        ))}
      </ul>
    </div>
    <Image img={picBar} className='hidden sm:block'/>
    <div>
   
    
    </div>
   
  </aside>
  )
}
