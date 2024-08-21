import { useEffect, useState } from 'react';
import StatCard from '../../components/features/Admin/Home/StatCard';
import Title from '../../components/ui/Title';
import { API_ENDPOINTS, statCards } from '../../Constants';
import { FaArrowRight } from "react-icons/fa6";
import {  getTotalItems } from '../../api';


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

  return (
    <div className='' >
      <section className='bg-blue-100 p-2 rounded-lg my-2'>
        <div className='flex justify-between py-2'>
        <Title text1="Statistiques" level={2}/>
        <p className='flex items-center gap-2'>Voir plus <FaArrowRight /> </p>
        </div>
        <div className='flex flex-wrap gap-2'>
            {cardsFetchingDatas.map( ({id, title, value, icon, color}) => (
              <StatCard key={id} title={title} value={value} icon={icon} iconStyle={color}/>
            ))}

        </div>
      </section>
     
    </div>
  )
}
