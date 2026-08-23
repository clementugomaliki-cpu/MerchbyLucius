import React from 'react'
import { Link } from "react-router"
import { LuMenu, LuX} from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import logo from "./images/logo.png"
import smlogo from "./images/smlogo.png"
import { useState } from "react";

export default function DashboardNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
<header className="flex w-320 h-16 justify-between items-center px-10 sm:px-12 py-3 sm:py-4 md:py-6 bg-white fixed top-0 right-0 border-b-1 border-[#BBC9C780] left-0 z-50">
      <div>
         <Link to="/"><img src={smlogo} alt="logo" className="sm:hidden w-12"/></Link>
          <Link to="/"><img src={logo} alt="Merch-by-Lucius logo" className="hidden sm:block sm:w-24 md:w-28" /></Link>
      </div>
        <div className="flex space-x-8 text-base">
          <Link to="/materials" className=" hidden md:block font-semibold">Discover</Link>
          <Link to="/posts" className="hidden md:block">Blog</Link>
        </div>
        <div className="text-base font-semibold flex justify-between w-32 h-10 gap-4 ">
           <div className='flex justify-between w-18 h-10 p-2 '>
            <Link to="/sign-in" className="hidden md:block text-[20px] cursor-pointer"><IoIosNotificationsOutline className='text-[30px] w-5 h-5 text-[#4A5568] ' /></Link>
          <Link className="hidden md:block text-[20px] cursor-pointer "><IoCartOutline  className='text-[30px] w-5 h-5 text-[#4A5568]'/></Link>
           </div>
         <div className='w-10 h-10'>
           <img src="profile.jpg" alt=""  className=' rounded-full border-2 w-full object-full h-full border-[#2EC5BC]'/>
          </div>
        {/* <div className="relative z-40"> */}
        <button 
          className="md:hidden text-3xl relative z-40" onClick={toggleMenu}
           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >{isMenuOpen ? <LuX/> : <LuMenu />}
           
        </button>
        {/* </div> */}
        
        {isMenuOpen && (
          
            <div className="fixed inset-0 bg-[#2EC5BC]/20 z-30" onClick={()=> setIsMenuOpen(false)}/>)}
            <div className={`flex flex-col items-start text-left absolute top-full right-0 mt-2 text-base px-4 font-semibold z-40 transition-all duration-700 origin-top-right divide-y divide-white/40 bg-[#2EC5BC] w-48 text-white ${
              isMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              <Link to="/materials" onClick={()=> setIsMenuOpen(false)} className="py-2">Discover</Link>
              <Link to="/posts" onClick={()=> setIsMenuOpen(false)} className="py-2">Blog</Link>
              <Link to="/sign-in" onClick={()=> setIsMenuOpen(false)} className="py-2">Login</Link>
              <Link onClick={()=> setIsMenuOpen(false)} className="py-3">Become an Affiliate</Link>
            </div>
          
          
        </div>
      </header>
    </>
  )
}

