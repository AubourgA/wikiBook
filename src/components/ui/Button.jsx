import { string,elementType,func, oneOfType, element } from 'prop-types';

export default function Button( {title, icon:Icon, onButtonClick, type, category}) {

  const getCategoryClass = (category) => {
    switch (category) {
      case 'primary':
        return 'flex-1  justify-center bg-secondary text-light w-full ';
      case 'secondary':
        return 'flex-1 flex-row-reverse items-center justify-center gap-2 text-secondary border-secondary  ';
      case 'nav':
        return 'cursor-pointer border-none md:hidden';
      case 'paginate':
        return 'bg-primary50 px-4 py-1 rounded hover:bg-primary100 hover:text-light';
      case 'nav-user':
        return 'flex-row-reverse items-center justify-center gap-2 text-secondary border-secondary';
      case 'filter-primary':
        return 'bg-secondary text-light items-center justify-between';
      case 'filter-secondary':
        return 'border-secondary text-secondary justify-between items-center';
      case 'forms':
        return 'bg-primary100 justify-center mt-4 text-white';
      default:
        return '';
    }
  };

  const buttonClass = `flex rounded-xl px-4 py-2 btn-pressed border text-sm md:text-base ${getCategoryClass(category)} `;

  return (
    <button type={type} 
            className={buttonClass}
            onClick={onButtonClick}>
        {title}
        {Icon && <Icon />}
    </button>
  )
}

Button.propTypes = {
   type:string.isRequired,
   title: oneOfType([
    string,
    element
  ]).isRequired,
    category: string.isRequired,
    icon: elementType,
    onButtonClick:func,
   
}