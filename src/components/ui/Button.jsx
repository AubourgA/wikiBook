import { string,elementType,func, oneOfType, element } from 'prop-types';

export default function Button( {title, className, icon:Icon, onButtonClick, type}) {
  return (
    <button type={type} className={ ` flex  items-center border  p-2 rounded btn-pressed  text-sm ${className} md:text-md` }
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
    className: string.isRequired,
    icon: elementType,
    onButtonClick:func
}