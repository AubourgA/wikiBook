import { string } from 'prop-types';

export default function Error( {title, message}) {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
        <h1>{title}</h1>
        <p>{message}</p>
    </div>
  )
}

Error.propTypes = {
  title: string.isRequired,
  message: string.isRequired
}