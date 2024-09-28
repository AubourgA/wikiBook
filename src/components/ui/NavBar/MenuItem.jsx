import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ item }) => (
  <NavLink
  
    to={item.url}
  
    className={({ isActive }) =>
      `${isActive &&"text-secondary font-semibold" } gap-2 relative flex text-dark duration-300 items-center 
       after:bg-secondary  hover:bg-primary100/25 hover:rounded-sm md:hover:rounded-xl px-1 py-1 sm:px-2 `}
 
  >
    <item.icon/>
    <span className='hidden sm:block'>{item.title}</span>
  </NavLink>
);

MenuItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,    
    title: PropTypes.string.isRequired,  
    icon: PropTypes.elementType.isRequired 
  }).isRequired
};

export default MenuItem;