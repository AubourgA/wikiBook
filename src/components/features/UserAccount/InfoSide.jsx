
import Title from '../../ui/Title';

import { ImBooks } from "react-icons/im";
import { MdAssignmentReturn } from "react-icons/md";

export default function InfoSide( {user}) {


  const UserTotalLoans = user?.loans?.length
 console.log(user)
  return (
    <div>
        <Title text1='Informations' level={3}/>
       
        <div className='flex items-center gap-2 shadow-md rounded-md p-2 text-red-500'>
            <MdAssignmentReturn    className='text-[32px]'/>
            <div className='flex flex-col'>
                <span className='font-bold text-xl '>{UserTotalLoans}</span>
                <span className='text-sm'>Livres à rendre</span>
            </div>
        </div>
       
       
        <div className='flex items-center gap-2 shadow-md rounded-md p-2 my-2 text-primary100'>
            <ImBooks   className='text-[32px]'/>
            <div className='flex flex-col'>
                <span className='font-bold text-xl '>{UserTotalLoans}</span>
                <span className='text-sm'>Livres lus</span>
            </div>
        </div>
       
    </div>
  )
}
