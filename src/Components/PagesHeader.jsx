import { Link, NavLink } from "react-router"
import { LuMenu, LuX } from "react-icons/lu";
import logo from "../images/logo.png"
import smlogo from "../images/smlogo.png"
import avatar from "../images/profile-avatar.png";
import { useState } from "react";
import { MdOutlineShoppingCart, MdNotificationsNone, MdDashboard, MdOutlineInventory2, MdOutlineBrightness5, MdOutlinePoll } from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";

export default function PagesHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <header className="flex justify-between items-center px-10 sm:px-12 py-3 sm:py-4 md:py-6 bg-white fixed top-0 right-0 left-0 z-50">
      <div>
         <Link to="/"><img src={smlogo} alt="logo" className="sm:hidden w-12"/></Link>
          <Link to="/"><img src={logo} alt="Merch-by-Lucius logo" className="hidden sm:block sm:w-24 md:w-28" /></Link>
      </div>
        <div className="flex space-x-8 text-base">
          <Link to="/materials" className=" hidden md:block font-semibold">Discover</Link>
          <Link to="/posts" className="hidden md:block">Blog</Link>
        </div>
        <div className="space-x-4 text-base font-semibold flex items-center">
            <div className="hidden md:flex gap-4 items-center">
              <MdOutlineShoppingCart className="text-2xl"/>
              <MdNotificationsNone className="text-2xl"/>
              <div className="w-10 h-10  bg-[#2EC5BC] rounded-full flex items-center justify-center">
                <img src={avatar} alt="profile image" className="w-8 h-8 rounded-full"/>
              </div>
            </div>
        {/* <div className="relative z-40"> */}
        <button 
          className="md:hidden text-3xl relative z-40" onClick={toggleMenu}
           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >{isMenuOpen ? <LuX/> : <LuMenu />}
           
        </button>
        {/* </div> */}
        
        {isMenuOpen && (
          
            <div className="fixed inset-0 z-30" onClick={()=> setIsMenuOpen(false)}/>)}
            <div className={`flex flex-col items-start text-left absolute top-full right-0 mt-2 text-base px-4 font-semibold z-40 transition-all duration-700 origin-top-right border border-gray-200 bg-white w-48 text-black ${
              isMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              <div className="flex justify-between items-center gap-12 py-3">
                  <div className="w-8 h-8  bg-[#2EC5BC] rounded-full flex items-center justify-center">
                    <img src={avatar} alt="profile image" className="w-6 h-6 rounded-full"/>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlineShoppingCart className="text-2xl"/>
                    <MdNotificationsNone className="text-2xl"/>
                  </div>
              </div>
              <NavLink to="/dashboard" end onClick={()=> setIsMenuOpen(false)} className=" flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white py-2">        
                  <MdDashboard/>
                  DASHBOARD
              </NavLink>
              <NavLink to="/dashboard/purchases"  onClick={()=> setIsMenuOpen(false)} className=" flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white py-2">        
                  <MdOutlineInventory2/>
                  PURCHASES
              </NavLink>
              <NavLink to="/dashboard/activity"  onClick={()=> setIsMenuOpen(false)} className=" flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white py-2">        
                  <MdOutlinePoll/>
                  ACTIVITY
              </NavLink>
              <NavLink to="/dashboard/rewards"  onClick={()=> setIsMenuOpen(false)} className=" flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white py-2">        
                  <GiStarMedal/>
                  REWARDS
              </NavLink>
              <NavLink to="/dashboard/settings"  onClick={()=> setIsMenuOpen(false)} className=" flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white py-2">        
                  <MdOutlineBrightness5/>
                  SETTINGS
              </NavLink>
            </div>
        </div>
      </header>
    </>
  )
}