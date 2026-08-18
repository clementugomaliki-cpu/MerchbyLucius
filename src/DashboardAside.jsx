import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { TiShoppingBag } from "react-icons/ti";
import { MdInsertChartOutlined } from "react-icons/md";
import { RiMedal2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from 'react'; 
function DashboardAside() {
  const [active, setActive] = useState('DASHBOARD')
  const baseActive = 'flex gap-3 ml-6'
  return (
             <div className='col-span-1 fixed h-screen w-70 left-0 top-0 border-r-1 border-[#BBC9C780]'>
            <div className='pt-15 box-content  '>
            <div className='mt-10 pl-8 pr-8 flex gap-4 mb-6 w-68 h-12'>
                    <img src="profiles.jpg" alt=""  className='w-12 h-12 rounded-xl bg-[#91B0FA]'/>
                     <p className='font-[Plus Jakarta Sans] font-bold text-[14px] leading-[20px] text-center text-[#4A5568] pt-4'>James Brown</p>
                     </div>
    <div className='flex-col space-y-4 space-x-6 mx-7 w-70 h-470 cursor-pointer'>
  <div className={`${baseActive} ${active === "DASHBOARD" ? 'bg-[#2EC5BC] w-50 h-10 p-3 rounded-xl' : 'flex gap-3 ml-6 '}`} onClick={() => setActive("DASHBORD")}>  <span className='w-5 h-5 text-[#4A560]'><LuLayoutDashboard />  </span>  <h1 className='font-bold text-[11px] leading-[17px] text-center '>DASHBOARD</h1></div>
  <div className={`${baseActive} ${active === "PURCHASES" ? 'bg-[#2EC5BC] w-50 h-10 p-3 rounded-xl' : 'flex gap-3 ml-6 '}`}  onClick={() => setActive("PURCHASES")}><span><TiShoppingBag /></span>     <h1 className='font-bold text-[11px] leading-[17px] text-center'>PURCHASES</h1></div>
   <div className={`${baseActive} ${active === "ACTIVITY" ? 'bg-[#2EC5BC] w-50 h-10 p-3 rounded-xl' : 'flex gap-3 ml-6 '}`} onClick={() => setActive("ACTIVITY")}><span><MdInsertChartOutlined /></span> <h1 className='font-bold text-[11px] leading-[17px] text-center'>ACTIVITY</h1></div>
   <div className={`${baseActive} ${active === "REWARDS" ? 'bg-[#2EC5BC] w-50 h-10 p-3 rounded-xl' : 'flex gap-3 ml-6 '}`} onClick={() => setActive("REWARDS")}><span><RiMedal2Line /></span>        <h1 className='font-bold text-[11px] leading-[17px] text-center'>REWARDS</h1></div>
   <div className={`${baseActive} ${active === "SETTINGS" ? 'bg-[#2EC5BC] w-50 h-10 p-3 rounded-xl' : 'flex gap-3 ml-6 '}`} onClick={() => setActive("SETTINGS")}><span><IoSettingsOutline /></span>    <h1 className='font-bold text-[11px] leading-[17px] text-center'>SETTINGS</h1></div>
    </div>
    </div>
    </div>
  )
}

export default DashboardAside