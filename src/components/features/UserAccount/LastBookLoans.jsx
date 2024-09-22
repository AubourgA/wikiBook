import { columnsUserLoans } from '../../../Constants'
import CustomTable from '../../ui/Table/CustomTable'
import Title from '../../ui/Title'


export default function LastBookLoans( {user}) {

 const datas= user?.loans
 const sortedLoansByBorrowDate = datas.sort((a, b) => new Date(b.borrowDate) - new Date(a.borrowDate));

  return (
    <div>
      <Title level={3} text1="Mes dernieres lectures"  />
       <CustomTable data={sortedLoansByBorrowDate} columns={columnsUserLoans}/>
    </div>
  )
}

