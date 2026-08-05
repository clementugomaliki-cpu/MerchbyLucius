import { Link } from "react-router";
import { MdDashboard, MdOutlineInventory2, MdOutlineBrightness5, MdOutlinePoll } from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";
import { useState } from "react";

export default function Sidebar(){
    const [activeTab, setActiveTab] = useState("dashboard")

    return (
        <div className="hidden md:flex flex-col mt-24 w-64 fixed top-0 left-0 bottom-0 bg-white gap-4 p-6 min-h-screen">
            <Link to="/dashboard" onClick={()=>setActiveTab("dashboard")} 
                className={`flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${activeTab === "dashboard" && "bg-[#2EC5BC] text-white"}`}>        
                  <MdDashboard/>
                  DASHBOARD
              </Link>
              <Link to="/dashboard/purchases" onClick={()=>setActiveTab("purchases")} 
                className={`flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${activeTab === "purchases" && "bg-[#2EC5BC] text-white"}`}>        
                  <MdOutlineInventory2/>
                  PURCHASES
              </Link>
              <Link to="/dashboard/activity" onClick={()=>setActiveTab("activity")}
                className={`flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${activeTab === "activity" && "bg-[#2EC5BC] text-white"}`}>        
                  <MdOutlinePoll/>
                  ACTIVITY
              </Link>
              <Link to="/dashboard/rewards" onClick={()=>setActiveTab("rewards")}
                className={`flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${activeTab === "rewards" && "bg-[#2EC5BC] text-white"}`}>        
                  <GiStarMedal/>
                  REWARDS
              </Link>
              <Link to="/dashboard/settings" onClick={()=>setActiveTab("settings")}
                className={`flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${activeTab === "settings" && "bg-[#2EC5BC] text-white"}`}>        
                  <MdOutlineBrightness5/>
                  SETTINGS
              </Link>
        </div>
    )
}