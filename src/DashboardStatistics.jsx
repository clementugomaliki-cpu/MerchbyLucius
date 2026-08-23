import React from 'react'
import { useDownload } from './Download'
import { data } from 'react-router'

function DashboardStatistics({id}) {
    
     const { download, handleDownload } = useDownload()
     
  return (
    <div className='w-236 h-60  my-10'>
       <div className='grid grid-cols-2 '>
       <div className='w-110 h-56 border border-gray-200 rounded-2xl bg-white '>
        <div className='flex p-4 justify-between mx-2'>
        <h3 className='font-[Plus Jakarta Sans] text-[#4A5568] font-bold text-[20px]'>Last 7 Days</h3>
         <span className='rounded-full bg-[#2EC5BC33]/30  px-3 py-2'> <p className='font-bold text-[11px] font-[Plus Jakarta Sans] text-[#2EC5BC]'>Live Activity</p></span>
        </div>
        <div className='w-100 mx-4 pt-2 h-30 grid grid-cols-2 gap-8 content-center'>
          {/* first box inside the container */}
          <div className='cols-span-1  h-28 w-48 p-6 gap-2 bg-[#F2F4F5] rounded-3xl '>
            <h3 className='text-[32px] font-extrabold text-[#2EC5BC]'>2</h3>
            <p className='font-mexium text-[14px] text-[#6B7280] font-[Plus Jakarta Sans]'>Total Purchases</p>
          </div>
          {/* second box inside the container */}
          <div className='cols-span-1 h-28 w-48 p-6 gap-2 bg-[#F2F4F5] rounded-3xl'>
          <h3 className='text-[32px] font-extrabold text-[#2EC5BC]'>5</h3>
            <p className='font-mexium text-[14px] text-[#6B7280] font-[Plus Jakarta Sans]'>Downloads</p>
          </div>
          {/* second box */}
        </div>
       </div>

        {/* //second box to the right */}
       <div className='w-110 h-56 border border-gray-200  rounded-2xl bg-white' >
        <div className='flex  p-4 justify-between mx-2'>
          <h3 className='font-[Plus Jakarta Sans] text-[#4A5568] font-bold text-[20px]'>Last 28 Days</h3>
           <span className='rounded-full bg-[#91B0FA33]/30  px-3 py-2'> <p className='font-bold text-[11px] font-[Plus Jakarta Sans] text-[#002F71]'>Monthly Recap</p></span>
        </div>
        <div className='w-100 mx-4 pt-4 h-30 grid grid-cols-2 gap-4 content-center'>
          {/* first box inside the container */}
          <div className='cols-span-1  h-28 w-48 p-6 gap-2 bg-[#F2F4F5] rounded-3xl '>
            <h3 className='text-[32px] font-extrabold text-[#002F71]'>8</h3>
            <p className='font-mexium text-[14px] text-[#6B7280] font-[Plus Jakarta Sans]'>Total Purchases</p>
          </div>
          {/* second box inside the container */}
          <div className='cols-span-1 h-28 w-48 p-6 gap-2 bg-[#F2F4F5] rounded-3xl'>
          <h3 className='text-[32px] font-extrabold text-[#002F71]'>12</h3>
            <p className='font-mexium text-[14px] text-[#6B7280] font-[Plus Jakarta Sans]'>Downloads</p>
          </div>
          {/* second box */}
        </div>
       </div>
       </div>
    </div>
  )
}

export default DashboardStatistics