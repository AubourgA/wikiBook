import { FaArrowRight } from 'react-icons/fa';
import Title from '../../../ui/Title';
import StatCard from './StatCard';


export default function SectionStats( {title, datas}) {
  return (
  <section className='bg-blue-100 p-2 rounded-lg mt-4 col-span-6'>
        <div className='flex justify-between py-2'>
            <Title text1={title} level={2}/>
            <p className='flex items-center gap-2'>Voir plus <FaArrowRight /> </p>
        </div>
        <div className='flex flex-wrap gap-2'>
            {datas.map( ({id, title, value, icon, color}) => (
              <StatCard key={id} title={title} value={value} icon={icon} iconStyle={color}/>
            ))}

        </div>
      </section > 
  )
}

