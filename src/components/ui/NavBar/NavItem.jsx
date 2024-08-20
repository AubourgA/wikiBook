import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
const NavItem = ({ item, onClick, defaultTo }) => (


  <NavLink
    key={item.id}
    to={item.url || defaultTo}
    className={({ isActive }) =>
      `relative inline-block text-dark duration-300 
       ${isActive
          ? "text-secondary font-semibold"
          : "hover:after:scale-x-100"}
       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-secondary after:origin-left after:transition-transform after:duration-300 after:ease-in-out `}
    onClick={onClick}
  >
    {item.title}
  </NavLink>
);

NavItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID de l'élément, requis et peut être une chaîne ou un nombre
    url: PropTypes.string,    // URL de l'élément, optionnelle
    title: PropTypes.string.isRequired  // Titre de l'élément, obligatoire
  }).isRequired,
  onClick: PropTypes.func,  // Fonction de rappel, optionnelle
  defaultTo: PropTypes.string
};

export default NavItem;