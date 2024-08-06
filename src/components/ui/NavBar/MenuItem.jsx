import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => (
  <NavLink
  
    to={item.url}
   end
    className={({ isActive }) =>
      `${isActive &&"text-secondary font-semibold" } gap-2 relative flex text-dark duration-300 items-center 
       after:bg-secondary  hover:bg-primary100/25 hover:rounded-sm md:hover:rounded-xl px-1 py-1 sm:px-2 `}
 
  >
    <item.icon/>
    <span className='hidden sm:block'>{item.title}</span>
  </NavLink>
);

export default MenuItem;