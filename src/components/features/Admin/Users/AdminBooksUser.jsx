import { columnsLoansByUser } from '../../../../Constants';
import CustomTable from '../../../ui/Table/CustomTable';
import Title from '../../../ui/Title';


export default function AdminBooksUser( {data}) {
   
  return (
    <section className="  bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        <div className="p-6">
            <Title level={2} text1='Livres empruntés' custom1='border-b-2 border-gray-200' />
            <CustomTable data={data} columns={columnsLoansByUser}/>
        </div>
</section>
  )
}


