import { string} from "prop-types"

export default function MessageForm( {type, message, styleType, styleMessage}) {
  return (
    <p className= {`${styleMessage} text-xs pt-1`}>
        <span className={`${styleType} rounded-xl px-2 mr-2 font-bold`}>
            {type}
        </span> 
        {message}
    </p>
  )
}

MessageForm.propType = {
    type: string,
    message : string.isRequired,
    styleType : string,
    styleMessage : string.isRequired,
}