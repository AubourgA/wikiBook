import { useState } from 'react'
import Button from '../../../ui/Forms/Button'
import BookCopiesInventory from './BookCopiesInventory'
import LoansGraph from './LoansGraph'
import BookCopiesUsers from './BookCopiesUsers'

export default function BookDetailsTabs({data,id}) {
    const [selectedTab, setSelectedTab] = useState(1)

    const handleChangeTabs = (index) => {
       setSelectedTab(index)
    }

    const getTrianglePosition = () => {
        switch (selectedTab) {
          case 1:
            return 'translateX(0)';
          case 2:
            return 'translateX(1300%)';
          case 3:
            return 'translateX(2600%)';
          default:
            return 'translateX(0)';
        }
      };
   
    
 
      const tabComponents = [
        <BookCopiesInventory key={1} data={data.bookCopies} id={id}   />,
        <LoansGraph key={2} data={data.bookCopies}/>,
        <BookCopiesUsers key={3} data={data.bookCopies} />
      ];

  return (
    <div className='mt-4'>
            <div className='flex justify-center'>
                 <div className='relative bg-white '>

                    <div className='flex gap-2'>
                        <Button type='button' title="Exemplaires" category='tabs' onButtonClick={() => handleChangeTabs(1)} custom='hover:bg-dark/75 rounded-none hover:text-light'/>
                        <Button type='button' title="Suivi des Emprunts" category='tabs' onButtonClick={() => handleChangeTabs(2)} custom='hover:bg-dark/75 rounded-none hover:text-light'/>
                        <Button type='button' title="Derniers Lecteurs" category='tabs' onButtonClick={() => handleChangeTabs(3)} custom='hover:bg-dark/75 rounded-none hover:text-light'/>
                    </div>
                    <div className='absolute rounded left-0 -bottom-2 flex justify-center h-0.5 w-full bg-dark '>
                    <div
                  className='absolute -top-[6px] left-[12%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-dark transition-transform duration-300'
                  style={{ transform: getTrianglePosition() }}
                />
                    </div>
                 </div>
            </div>
            <div className='py-4'>
                  {tabComponents[selectedTab - 1]}
            </div>
    </div>
  )
}
