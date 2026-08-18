import React from 'react'
import badge from './assets/container.svg'
function DashboardFooter() {
  return (
    <div className="w-234 h-72  bg-[#002F71E5] rounded-4xl pt-14 px-10 pb-10 mt-10">
        <div className="grid grid-cols-2 gap-4 ">
            <div className="w-234 h-72 ">
                <h3 className="font-bold w-200 h-10 text-white font-extrabold text-[30px]">You've earned 450 Merch Points!</h3>
                <p className='w-147 h-6 font-medium text-[16px] text-white '>Keep shopping  to unlock limited edition learning packs and exclusive badges.</p>
               < button className="h-12 w-49 text-white bg-[#2EC5BC] rounded-full py-3 px-8 text-[16px] mt-10 ">View All Rewards</button>
            </div>

            <div className=' ml-60  '>
                <div className='rounded-full border-white/20 bg-[#006A65] border-4 border p-4 w-48 h-48 mx-auto justify-center place-items-center'>

                <img src={badge} alt="Badge"  className='justify-center mx-auto my-10 items-center '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardFooter