import {node, number, string} from 'prop-types'
import Image from '../ui/Image'
import Button from '../ui/Forms/Button'
import Title from './Title'

const  Card = ( {children}) => {
  return (
    <div  className='card shadow-xl hover:translate-y-1 transition-transform flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_25%] '>
        {children}
    </div>
  )
}


const CardHeader = ( {pic} ) => <div > <Image img={pic} text="cover" className='w-full h-[250px] object-cover rounded-t' /></div>
const CardContent = ( {children, ...htmlProps}) => <div {...htmlProps}>{children}</div>
const CardBadge = ( {type,...htmlProps} ) => <div {...htmlProps}>{type}</div>
const CardTitle = ( {text, level, ...htmlProps}) => <Title text1={text} level={level} {...htmlProps}/>
const CardDescription = ( {children}) => <div>{children}</div>
const CardFooter = ( {onDetailClick : handleDetail, onBookingClick: handleAddBook, id, hasStock}) =>  { return(

<div className='flex gap-2 pb-4 px-2'>
    <Button type="button" category="secondary" title="Détail" onButtonClick={()=>handleDetail(id)}  />
    <Button type="button" category="primary" title="Sélectionner" onButtonClick={()=>handleAddBook(id)} disabled={!hasStock}  />
</div> 
)}


Card.Header = CardHeader;
Card.Content = CardContent;
Card.Badge = CardBadge;
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

CardBadge.prototypes = {
    type : string
}

CardTitle.propTypes = {
    text1 : string,
    level : number
}

CardDescription.propTypes = {
    children : node
}

CardFooter.propTypes = {
    children : node
}

