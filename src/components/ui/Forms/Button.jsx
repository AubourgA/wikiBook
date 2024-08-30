import { string,elementType,func, oneOfType, element } from 'prop-types';

export default function Button( {title, icon:Icon, onButtonClick, type, category, custom=""}) {

  const getCategoryClass = (category) => {
    switch (category) {
      case 'primary':
        return 'flex-1  justify-center bg-secondary border text-light w-full ';
      case 'secondary':
        return 'flex-1 flex-row-reverse items-center justify-center gap-2 border text-secondary border-secondary  ';
      case 'nav':
        return 'cursor-pointer border-none md:hidden';
      case 'paginate':
        return 'bg-primary50 px-4 py-1 rounded border hover:bg-primary100 hover:text-light';
      case 'nav-user':
        return 'flex-row-reverse items-center border justify-center gap-2 text-secondary border-secondary';
      case 'filter-primary':
        return 'bg-secondary text-light items-center border justify-between';
      case 'filter-secondary':
        return 'border-secondary text-secondary border justify-between items-center';
      case 'forms':
        return 'bg-primary100 justify-center border my-4 text-white';
      case 'confirm':
         return 'bg-green-500 justify-center border mt-4 text-white';
      case 'danger':
         return 'bg-red-500 justify-center border mt-4 text-white';
      case 'tabs' :
          return 'text-dark'
      default:
        return '';
    }
  };

  const buttonClass = `flex rounded-lg px-4 py-2  text-sm md:text-base ${category !== 'tabs' ? 'btn-pressed' : ''} ${getCategoryClass(category)} ${custom} `;

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
  ]),
    category: string.isRequired,
    icon: elementType,
    onButtonClick:func,
   custom:string
}