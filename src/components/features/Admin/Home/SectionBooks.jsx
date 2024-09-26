import { FaArrowRight } from 'react-icons/fa';
import Loader from '../../../ui/Loader';
import CustomTable from '../../../ui/Table/CustomTable';
import Title from '../../../ui/Title';


export default function SectionBooks( {title, datas, dataTable, columnTable}) {
  return (
    <section className='bg-blue-100 p-2 rounded-lg  col-span-2'>
         <div className='flex justify-between py-2'>
              <Title text1={title} level={2}/>
              <p className='flex items-center gap-2'>Voir plus <FaArrowRight /> </p>
          </div>
          {datas.isLoading && <Loader />}
          {datas && datas["hydra:member"] ? (
          <CustomTable data={dataTable} columns={columnTable} />
        ) : (
          <p>Les données des utilisateurs ne sont pas encore disponibles.</p>
        )}

      </section>
  )
}

