import { Link } from "react-router"
import { LuMenu, LuX } from "react-icons/lu";
import avatar from "./images/profile-avatar.png";
import { useState } from "react";

import PagesHeader from "./Components/PagesHeader";
import Sidebar from "./Components/Sidebar";

export default function Dashboard() {
  
  return (
    <div>
      <PagesHeader/>
      <div className="bg-[#F8FAFB] flex gap-6">
        <Sidebar/>
        <div className="flex-1 min-h-screen mt-24 md:ml-72 px-4 sm:px-8 md:px-12 py-8">
          THIS IS THE DASHBOARD SECTION
        </div>
      </div>
    </div>
  )
}