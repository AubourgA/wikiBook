

import { columnsUserLoans } from '../../../../Constants';
import CustomTable from '../../../ui/Table/CustomTable';
import Title from '../../../ui/Title';


export default function HistoryLoans( {user}) {

    const loans = user?.loans || []

  return (
    <div>
        <Title text1='Historique des Emprunts' level={3} custom1='border-b mb-4' />
       <CustomTable data={loans} columns={columnsUserLoans}/>
    </div>
  )
}

