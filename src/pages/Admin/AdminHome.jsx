import { useEffect, useState } from 'react';
import StatCard from '../../components/features/Admin/Home/StatCard';
import Title from '../../components/ui/Title';
import { API_ENDPOINTS, columnsShortBooks, columnsUser, statCards } from '../../Constants';
import { FaArrowRight } from "react-icons/fa6";
import {  getTotalItems } from '../../api';
import CustomTable from '../../components/ui/Table/CustomTable'
import useFetch from '../../hooks/useFetch';

import Loader from '../../components/ui/Loader';
import { filteredUserbyRoleAndDate, orderedDescDataByDate } from '../../utils/deepAccessValue';

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
 
 
 const { data : customers , isLoading} = useFetch(API_ENDPOINTS.USERS)
 const onlyNewCustomers = filteredUserbyRoleAndDate(customers["hydra:member"]).slice(0,5)

 const { data: books, isLoading: isCharging} = useFetch(`${API_ENDPOINTS.BOOKS}?order[createdAt]=DESC`)
 const newBooks = orderedDescDataByDate(books["hydra:member"], "createdAt").slice(0,5)

  return (
    <div className='grid grid-cols-6 gap-4' >
      <section className='bg-blue-100 p-2 rounded-lg mt-4 col-span-6'>
        <div className='flex justify-between py-2'>
            <Title text1="Statistiques" level={2}/>
            <p className='flex items-center gap-2'>Voir plus <FaArrowRight /> </p>
        </div>
        <div className='flex flex-wrap gap-2'>
            {cardsFetchingDatas.map( ({id, title, value, icon, color}) => (
              <StatCard key={id} title={title} value={value} icon={icon} iconStyle={color}/>
            ))}

        </div>
      </section >
      <section className='bg-blue-100 p-2 rounded-lg  col-span-4'>
         <div className='flex justify-between py-2'>
              <Title text1="Derniers Utilisateurs" level={2}/>
              <p className='flex items-center gap-2'>Voir plus <FaArrowRight /> </p>
          </div>
          {isLoading && <Loader />}
        
          {customers && customers["hydra:member"] ? (
          <CustomTable data={onlyNewCustomers} columns={columnsUser} />
        ) : (
          <p>Les données des utilisateurs ne sont pas encore disponibles.</p>
        )}
      </section>
      <section className='bg-blue-100 p-2 rounded-lg  col-span-2'>
         <div className='flex justify-between py-2'>
              <Title text1="Derniers Livres" level={2}/>
              <p className='flex items-center gap-2'>Voir plus <FaArrowRight /> </p>
          </div>
          {isCharging && <Loader />}
          {books && books["hydra:member"] ? (
          <CustomTable data={newBooks} columns={columnsShortBooks} />
        ) : (
          <p>Les données des utilisateurs ne sont pas encore disponibles.</p>
        )}

      </section>

     
    </div>
  )
}
