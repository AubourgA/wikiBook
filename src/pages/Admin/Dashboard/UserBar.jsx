import { FaCalendarAlt } from "react-icons/fa";
import DisplayDate from '../../../components/features/displayDate/DisplayDate'
export default function UserBar( {user}) {
  return (
    <section className='flex justify-between items-center bg-primary50 rounded-lg p-3 '>
        <p>Bonjour <span className='font-bold'>{user?.username}</span></p>
        <p className='flex items-center gap-2'><FaCalendarAlt className='text-secondary/50'/> <DisplayDate /></p>
    </section>
  )
}
