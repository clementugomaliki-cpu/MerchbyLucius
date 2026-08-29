import React from 'react'
import { useDownload } from './Download'
import { data } from 'react-router'

function DashboardStatistics({id}) {
    
     const { download, handleDownload } = useDownload()
     
  return (
    <div className='flex-1 bg-[#F8FAFB] mt-24 md:mt-0 md:ml-72 px-4 sm:px-8 md:px-12 py-8'>
       <div className=' grid md:grid-cols-2 gap-8 '>
       <div className='w-90 h-61  px-6 py-4 border border-gray-200 rounded-2xl bg-white lg:w-110 lg: '>
          <div className='flex p-4 justify-between mx-2'>
          <h3 className='font-[Plus Jakarta Sans] text-[#4A5568] font-bold text-[20px]'>Last 7 Days</h3>
          <span className='rounded-full bg-[#2EC5BC33]/30  px-3 py-2'> <p className='font-bold text-[11px] font-[Plus Jakarta Sans] text-[#2EC5BC]'>Live Activity</p></span>
          </div>
        <div className='flex justify-between content-center'>
          {/* first box inside the container */}
              <div className='cols-span-1  h-28 w-40 lg:w-48 p-6 gap-2 bg-[#F2F4F5] rounded-3xl '>
                <h3 className='text-[32px] font-extrabold text-[#2EC5BC]'>2</h3>
                <p className='font-mexium text-[14px] text-[#6B7280] font-[Plus Jakarta Sans]'>Total Purchases</p>
              </div>
          {/* second box inside the container */}
                <div className='cols-span-1 h-28 w-40 lg:48 p-6 gap-2 bg-[#F2F4F5] rounded-3xl'>
                <h3 className='text-[32px] font-extrabold text-[#2EC5BC]'>5</h3>
                  <p className='font-mexium text-[14px] text-[#6B7280] font-[Plus Jakarta Sans]'>Downloads</p>
                </div>
          {/* second box */}
        </div>
       </div>

        {/* //second box to the right */}
       <div className='w-90 h-61 border border-gray-200  px-6 py-4 bg-white lg:w-110 lg: rounded-2xl' >
        <div className='flex  p-4 justify-between mx-2'>
          <h3 className='font-[Plus Jakarta Sans] text-[#4A5568] font-bold text-[20px]'>Last 28 Days</h3>
           <span className='rounded-full bg-[#91B0FA33]/30  px-3 py-2'> <p className='font-bold text-[11px] font-[Plus Jakarta Sans] text-[#002F71]'>Monthly Recap</p></span>
        </div>
        <div className='flex justify-between content-center'>
          {/* first box inside the container */}
          <div className='cols-span-1 h-28 w-40 lg:w-47 p-6 gap-2 bg-[#F2F4F5] rounded-3xl '>
            <h3 className='text-[32px] font-extrabold text-[#002F71]'>8</h3>
            <p className='font-mexium text-[14px] text-[#6B7280] font-[Plus Jakarta Sans]'>Total Purchases</p>
          </div>
          {/* second box inside the container */}
          <div className='cols-span-1 h-28 w-40 lg:w-47 p-6 gap-2 bg-[#F2F4F5] rounded-3xl'>
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