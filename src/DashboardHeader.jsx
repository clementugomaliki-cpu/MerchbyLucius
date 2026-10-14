import React from 'react'
import card from './images/Container.svg'
import { useState, useMemo } from 'react'
function DashboardHeader() {
  // const [total, setTotal] = useState(0)
  // const  total = useMemo(
  //   () => items.reduce((sum, item) => sum + item.amount, 0),
  //   [items]
  // );

  return (
    <div className='flex-1 bg-[#F8FAFB]  md:mb-0 mt-24  px-4 sm:px-8 md:px-12 py-8 '>
    <header className=''>
                <div className='flex flex-col md:flex-row md:justify-between lg:gap-80 '>
                <div className='flex-col'>
                    <h2 className='font-extrabold text-[16px] leading-5 mt-8 font-[Plus Jakarta Sans] '>Hello, James! 👋</h2>
                    <p className='font-medium text-[16px] text-[#6B7280] font-[Plus Jakarta Sans] '>Ready for today's learning adventure?</p>
                </div>
        <div className=' w-90 h-26 border border-1 border-[#BBC9C780] p-4 mt-4 rounded-4xl lg:w-66 lg:h-26 lg:rounded-2xl h-26 lg:mt-2 flex lg:gap-4 items-center'>
     <div className='w-12 h-12 bg-[#FFA952] rounded-2xl flex justify-center items-center lg:w-12 lg:h-12'  >
        <img src={card} alt="" className='item-center mx-auto w-5 h-5' />
     </div>
     <div className="py-1 ml-5 lg:w-35">
        <p className='text-[12px] font-bold lg:text-[12px] lg:font-bold text-[#6B7280]'>TOTAL SPENDING</p>
        <h1 className='lg:text-[32px] text-[32px] lg:font-semibold font-semibold text-[#002F71]'>N342.50</h1>

     </div>
     </div>
        </div>
    </header>

    </div>
  )
}

export default DashboardHeader