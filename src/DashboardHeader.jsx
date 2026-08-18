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
    <div className='p-1'>
    <header className='flex justify-between bg-white w-229 h-26 mt-18  py-6'>
                <div className=''>
                    <h2 className='font-extrabold text-[16px] leading-5 mt-8 font-[Plus Jakarta Sans]'>Hello, James! 👋</h2>
                    <p className='font-medium text-[16px] text-[#6B7280] font-[Plus Jakarta Sans] '>Ready for today's learning adventure?</p>
                </div>
        <div className='border-1 border-[#BBC9C780] p-4 min-w-50 rounded-2xl h-26 mt-2 flex gap-4 items-center'>
     <div className='w-12 h-12 bg-[#FFA952] rounded-2xl flex justify-center items-center'  >
        <img src={card} alt="" className='item-center mx-auto w-5 h-5' />
     </div>
     <div className="py-1">
        <p className='text-[12px] font-bold'>TOTAL SPENDING</p>
        <h1 className='text-2xl font-semibold text-[#002F71]'>N342.50</h1>

     </div>
        </div>
    </header>

    </div>
  )
}

export default DashboardHeader