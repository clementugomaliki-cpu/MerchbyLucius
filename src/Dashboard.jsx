import { Link } from "react-router"
import { LuMenu, LuX } from "react-icons/lu";
import logo from "./images/logo.png"
import smlogo from "./images/smlogo.png"
import avatar from "./images/profile-avatar.png";
import { useState } from "react";
import { MdOutlineShoppingCart, MdNotificationsNone, MdDashboard, MdOutlineInventory2, MdOutlineBrightness5, MdOutlinePoll } from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";
import PagesHeader from "./Components/PagesHeader";


export default function Dashboard() {
  
  return (
    <div>
      <PagesHeader/>
      <div className="bg-[#F8FAFB] grid grid-cols-4 gap-6">
        <div className="hidden md:flex flex-col mt-24 bg-white gap-4 p-6 min-h-screen">
          <Link to="/dashboard"className=" flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white py-2 px-4">        
                  <MdDashboard/>
                  DASHBOARD
              </Link>
              <Link className=" flex items-center gap-2 focus:bg-[#2EC5BC] rounded-xl focus:text-white py-2 px-4">        
                  <MdOutlineInventory2/>
                  PURCHASES
              </Link>
              <Link className=" flex items-center gap-2 focus:bg-[#2EC5BC] rounded-xl focus:text-white py-2 px-4">        
                  <MdOutlinePoll/>
                  ACTIVITY
              </Link>
              <Link className=" flex items-center gap-2 focus:bg-[#2EC5BC] rounded-xl focus:text-white py-2 px-4">        
                  <GiStarMedal/>
                  REWARDS
              </Link>
              <Link className=" flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white rounded-xl py-2 px-4">        
                  <MdOutlineBrightness5/>
                  SETTINGS
              </Link>
        </div>
        <div className="min-h-screen col-span-3 mt-24 ">
          <h2 className="font-extrabold text-2xl text-[#4A5568]">Your Purchases</h2>
          <p className="text-base/6 text-[#6B7280]">Manage your educational treasures and continue the learning journey.</p>
          <div className="flex gap-3 py-8">
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">All</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Interactive</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Worksheets</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Videos</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Bundles</button>
          </div>
        
        
        </div>
      </div>
    </div>
  )
}