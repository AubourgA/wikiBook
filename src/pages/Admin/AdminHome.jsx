import { useEffect, useState } from 'react';


import { API_ENDPOINTS, columnsShortBooks, columnsUser, statCards } from '../../Constants';

import {  getTotalItems } from '../../api';

import useFetch from '../../hooks/useFetch';


import { filteredUserbyRoleAndDate, orderedDescDataByDate } from '../../utils/filteredDatas';
import SectionStats from '../../components/features/Admin/Home/SectionStats';
import SectionUsers from '../../components/features/Admin/Home/SectionUsers';
import SectionBooks from '../../components/features/Admin/Home/SectionBooks';

export default function AdminHome( ) {
 

 const [stats, setStats] = useState({
  totalUsers: null,
  totalBooks: null,
  totalLoans: null,
});


useEffect( ()=> {
      const fecthStats = async () => {
        try {
          const [usersCount, booksCount, loansCount] = await Promise.all( [
            getTotalItems(API_ENDPOINTS.USERS),
            getTotalItems(API_ENDPOINTS.BOOKS),
            getTotalItems(API_ENDPOINTS.LOANS)
          ])
          setStats({
            totalUsers: usersCount,
            totalBooks: booksCount,
            totalLoans: loansCount,
          });
        } catch(error) {
          console.error('Error fetching data :', error)
        }
      }
      fecthStats()
    },[])
 
 const cardsFetchingDatas = statCards(stats.totalUsers, stats.totalBooks, stats.totalLoans)
 
 const dataUsers = useFetch(API_ENDPOINTS.USERS)
 const onlyNewCustomers = filteredUserbyRoleAndDate(dataUsers.data["hydra:member"])

 const dataBooks = useFetch(`${API_ENDPOINTS.BOOKS}?order[createdAt]=DESC`)
 const onlyNewBooks = orderedDescDataByDate(dataBooks.data["hydra:member"], "createdAt",5)

  return (
    <div className='grid grid-cols-6 gap-4' >
      <SectionStats title="Statistique" datas={cardsFetchingDatas}/>
     
      <SectionUsers title="Derniers Utilisateurs" 
                    datas={dataUsers.data} 
                    dataTable={onlyNewCustomers} 
                    dataColumns={columnsUser}/>

      <SectionBooks title="Derniers Livres"
                    datas={dataBooks.data}
                    dataTable={onlyNewBooks}
                    columnTable={columnsShortBooks}/>
    </div>
  )
}
