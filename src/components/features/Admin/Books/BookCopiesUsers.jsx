import { useEffect, useState } from 'react';
import { columnsBookUserDetail } from '../../../../Constants'
import CustomTable from '../../../ui/Table/CustomTable'
import { extractUsersFromSortedData } from '../../../../utils/deepAccessValue';



export default function BookCopiesUsers( {data}) {

  const [lastUsers, setLastUsers] = useState([]);

  useEffect(() => {
    const userArray = extractUsersFromSortedData(data,10);
    setLastUsers(userArray);
  }, [data]); 


  return (
    <div>
     <CustomTable data={lastUsers} columns={columnsBookUserDetail}/>
    </div>
  )
}

