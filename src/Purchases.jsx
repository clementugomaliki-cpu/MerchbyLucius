import { Link } from "react-router"
import { LuMenu, LuX } from "react-icons/lu";
import avatar from "./images/profile-avatar.png";
import { useState } from "react";
// import { MdOutlineShoppingCart, MdNotificationsNone } from "react-icons/md";
import PagesHeader from "./Components/PagesHeader";
import PurchasesCard from "./Components/PurchasesCard";
import Sidebar from "./Components/Sidebar";
import frame1 from "./images/frame1.png";
import frame2 from "./images/frame2.png";
import frame3 from "./images/frame3.png";
import frame4 from "./images/frame4.png";

export default function Purchases() {
  
  return (
    <div>
      <PagesHeader/>
      <div className="bg-[#F8FAFB] flex gap-6">
        <Sidebar/>
        <div className="flex-1 min-h-screen mt-24 ml-72 px-12 py-8">
          <h2 className="font-extrabold text-2xl text-[#4A5568]">Your Purchases</h2>
          <p className="text-base/6 text-[#6B7280]">Manage your educational treasures and continue the learning journey.</p>
          <div className="flex gap-3 py-8">
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">All</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Interactive</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Worksheets</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Videos</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] focus:bg-[#2EC5BC] focus:text-white bg-gray-200">Bundles</button>
          </div>
         
          <div className="flex gap-6">
            <div className="flex gap-6">
              <PurchasesCard image={frame1} productTitle="Animal Colouring Pack" purchased="Oct 12, 2024"/>
              <PurchasesCard image={frame2} productTitle="Maths Adventure Pack" purchased="Oct 12, 2024"/>
            </div>
            <div className="flex gap-6">
              <PurchasesCard image={frame3} productTitle="Alphabet Adventure Pack" purchased="Oct 12, 2024"/>
              <PurchasesCard image={frame4} productTitle="Phonics Adventure Pack" purchased="Oct 12, 2024"/>
            </div>
          </div>
          <div className="flex gap-6 mt-10">
            <div className="flex gap-6">
              <PurchasesCard image={frame1} productTitle="Animal Colouring Pack" purchased="Oct 12, 2024"/>
              <PurchasesCard image={frame2} productTitle="Maths Adventure Pack" purchased="Oct 12, 2024"/>
            </div>
            <div className="flex gap-6">
              <PurchasesCard image={frame3} productTitle="Alphabet Adventure Pack" purchased="Oct 12, 2024"/>
              <PurchasesCard image={frame4} productTitle="Phonics Adventure Pack" purchased="Oct 12, 2024"/>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}