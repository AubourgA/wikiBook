
import HistoryLoans from '../../components/features/UserAccount/Loans/HistoryLoans';
import ReservedBooks from '../../components/features/UserAccount/Loans/ReservedBooks';
import useCurrentUser from '../../hooks/useCurrentUser'


export default function AccountLoans() {

    const { currentUser } = useCurrentUser();
   
 

  return (
    <div className='flex flex-wrap justify-between gap-4 p-4' >
             <ReservedBooks user={currentUser}/>
           <HistoryLoans user={currentUser} />
    </div>
  )
}
