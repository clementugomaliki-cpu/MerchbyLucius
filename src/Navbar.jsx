import { Link } from "react-router"
import { LuMenu, LuX } from "react-icons/lu";
import logo from "./images/logo.png"
import smlogo from "./images/smlogo.png"
import { useState } from "react";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <header className="flex justify-between items-center px-10 sm:px-14 md:px-20 py-3 sm:py-4 md:py-6 bg-white fixed top-0 right-0 left-0 z-50">
      
         <Link to="/"><img src={smlogo} alt="logo" className="sm:hidden w-12"/></Link>
          <Link to="/"><img src={logo} alt="Merch-by-Lucius logo" className="hidden md:w-15 sm:block sm:w-20 md:w-28" /></Link>
      
        <div className="flex space-x-8 text-base">
          <Link to="/materials" className=" hidden md:block font-semibold">Discover</Link>
          <Link to="/posts" className="hidden md:block">Blog</Link>
        </div>
        <div className="space-x-6 text-base font-semibold flex">
          
            <Link to="/sign-in" className="hidden md:block border px-8 py-3 rounded-full border-[#2EC5BC] text-[#2EC5BC] cursor-pointer">Login</Link>
          
          <Link className="hidden md:block bg-[#2EC5BC] text-white px-8 py-3 rounded-full cursor-pointer">Become an Affiliate</Link>
        </div>
        <button 
        className="md:hidden"
        onClick={toggleMenu}>
          {isMenuOpen ? <LuX/> : <LuMenu/>}
          {isMenuOpen && (
            <div className="flex flex-col items-start">
            <Link>Discover</Link>
            <Link>Blog</Link>
            <Link>Login</Link>
            <Link>Become an Affiliate</Link>
            </div>
          )}
        </button>
      </header>
    </>
  )
}