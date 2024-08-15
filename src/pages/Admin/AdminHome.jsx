import StatCard from '../../components/features/Admin/Home/StatCard';
import Title from '../../components/ui/Title';
import { statCards } from '../../Constants';
import { FaArrowRight } from "react-icons/fa6";


export default function AdminHome( ) {

 

  return (
    <div className='' >
      <section className='bg-blue-100 p-2 rounded-lg my-2'>
        <div className='flex justify-between py-2'>
        <Title text1="Statistique" level={2}/>
        <p className='flex items-center gap-2'>Voir plus <FaArrowRight /> </p>
        </div>
        <div className='flex flex-wrap gap-2'>
            {statCards.map( ({id, title, value, icon}) => (
              <StatCard key={id} title={title} value={value} icon={icon}/>
            ))}

        </div>
      </section>
     
    </div>
  )
}
