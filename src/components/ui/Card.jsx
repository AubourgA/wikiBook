import {node} from 'prop-types'
import Image from '../ui/Image'
import Button from '../ui/Button'

const  Card = ( {children}) => {
  return (
    <div  className='card shadow-xl hover:translate-y-1 transition-transform flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_25%] '>
        {children}
    </div>
  )
}


const CardHeader = ( {pic} ) => <div> <Image img={pic} alt="cover" className='w-full h-[250px] object-cover rounded-t' /></div>
const CardContent = ( {children, ...htmlProps}) => <div {...htmlProps}>{children}</div>
const CardTitle = ( {children,...htmlProps}) => <h2 {...htmlProps}>{children}</h2>
const CardDescription = ( {children}) => <div>{children}</div>
const CardFooter = ( ) =>  { return(

<div className='flex gap-2 pb-4 px-2'>
<Button type="button" title="Détail" onButtonClick={()=>{}} className='border-2 justify-center border-primary100 rounded text-primary100  w-full mt-2 text-base' />
<Button type="button" title="Réserver" onButtonClick={()=>{}} className='justify-center bg-secondary text-light  w-full mt-2 text-base' />
</div> 
)}


Card.Header = CardHeader;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;


export  default Card;

Card.propTypes = {
    children : node.isRequired,
}

CardHeader.propTypes = {
    children : node
}


CardContent.propTypes = {
    children : node
}


CardTitle.propTypes = {
    children : node
}

CardDescription.propTypes = {
    children : node
}

CardFooter.propTypes = {
    children : node
}

