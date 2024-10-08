import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, Tooltip  } from 'recharts';
import { transformData } from '../../../../utils/counterDatas';



export default function LoansGraph( {data}) {
  

  const dataTransformed = transformData(data)

  return (
    <>
      <div className='bg-white grid place-items-center p-4'>

      <BarChart width={400} height={250} data={dataTransformed}>
          <XAxis dataKey="name">
          </XAxis>
          <Tooltip />
          <Bar dataKey="nb" fill="#8884d8" barSize={(30)}/>
        </BarChart>
      </div>
   
    </>
  )
}

LoansGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      loans: PropTypes.arrayOf(
        PropTypes.shape({
          borrowDate: PropTypes.string.isRequired, 
        })
      ).isRequired,
    })
  ).isRequired,
};