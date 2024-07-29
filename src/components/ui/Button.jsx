import { string,elementType,func } from 'prop-types';

export default function Button( {title, className, icon:Icon, onButtonClick:handleResetFilter}) {
  return (
    <button className={ `${className} flex justify-between items-center border  p-2 rounded btn-pressed  text-sm md:text-md` }
            onClick={()=>handleResetFilter()}>
        {title}
        <Icon />
    </button>
  )
}

Button.propTypes = {
    title: string.isRequired,
    className: string.isRequired,
    icon: elementType,
    onButtonClick:func.isRequired

}