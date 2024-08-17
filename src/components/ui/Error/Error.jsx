import { string } from 'prop-types';

export default function Error( {title, message}) {
  return (
    <div className='flex gap-2 p-2 text-red-200 bg-red-400 justify-center items-center text-sm'>
        <p className=''>{title}</p>
        <p>{message}</p>
    </div>
  )
}

Error.propTypes = {
  title: string.isRequired,
  message: string.isRequired
}