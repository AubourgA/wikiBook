import { columnsUserLoans } from '../../../Constants'
import CustomTable from '../../ui/Table/CustomTable'
import Title from '../../ui/Title'


export default function LastBookLoans( {user}) {

 const datas= user?.loans


  return (
    <div>
      <Title level={3} text1="Mes derniere lectures"  />
       <CustomTable data={datas} columns={columnsUserLoans}/>
    </div>
  )
}

