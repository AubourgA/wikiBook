// import { Bar} from 'react-chartjs-2'
import { BarChart, Bar, XAxis, Tooltip  } from 'recharts';



export default function LoansGraph( {data}) {
  console.log(data)

  const transformData = (bookCopies) => {
    const monthlyCounts = {};
  
    bookCopies.forEach((bookCopy) => {
      bookCopy.loans.forEach((loan) => {
        const date = new Date(loan.borrowDate);
        const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        monthlyCounts[month] = (monthlyCounts[month] || 0) + 1;
      });
    });
  
    return Object.entries(monthlyCounts).map(([name, pv]) => ({ name, pv }));
  };

  const dataTransformed = transformData(data)

  return (
    <>
   <div className='bg-white grid place-items-center p-4'>

   <BarChart width={400} height={250} data={dataTransformed}>
      <XAxis dataKey="name">
      </XAxis>
      <Tooltip />
      <Bar dataKey="pv" fill="#8884d8" barSize={(30)}/>
    </BarChart>
   </div>
   
    </>
  )
}
