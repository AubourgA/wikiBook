import {node} from 'prop-types'

const  Card = ( {children}) => {
  return (
    <div  className='card shadow-xl hover:translate-y-1 transition-transform flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_25%] '>
        {children}
    </div>
  )
}

const CardHeader = ( {children}) => <div>{children}</div>
const CardContent = ( {children, ...htmlProps}) => <div {...htmlProps}>{children}</div>
const CardTitle = ( {children,...htmlProps}) => <h2 {...htmlProps}>{children}</h2>
const CardDescription = ( {children}) => <div>{children}</div>
const CardFooter = ( {children,...htmlProps}) => <div {...htmlProps}>{children}</div>


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

