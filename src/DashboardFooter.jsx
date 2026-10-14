import React from 'react'
import badge from './assets/Container.svg'
function DashboardFooter() {
  return (
    <div className="md:w-234 md:h-72 sm:w-auto sm:h-134 bg-[#002F71E5] rounded-4xl pt-14 px-10 pb-10 mt-10 border    flex-1  px-4 sm:px-8 md:px-12 py-8">
        <div className="flex justify-between gap-y-2">
            <div className="w-234 h-72 sm:w-100 sm:h-134  ">
                <h3 className="font-bold text-white font-extrabold text-base lg:text-[30px]">You've earned 450 Merch Points!</h3>
                <p className='font-medium text-sm lg:text-[16px] text-white '>Keep shopping  to unlock limited edition learning packs and exclusive badges.</p>
               < button className="h-12 w-49 text-white bg-[#2EC5BC] rounded-full py-3 px-8 text-[16px] mt-10 ">View All Rewards</button>
            </div>

            <div className=''>
                <div className='rounded-full border-white/20 bg-[#006A65] border-4 border p-4 w-48 h-48 mx-auto justify-center place-items-center'>

                <img src={badge} alt="Badge"  className='justify-center mx-auto my-10 items-center '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardFooter