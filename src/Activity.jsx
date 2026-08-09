import { useState } from "react";
import PagesHeader from "./Components/PagesHeader";
import PurchasesCard from "./Components/PurchasesCard";
import Sidebar from "./Components/Sidebar";
import { GiStarMedal } from "react-icons/gi";
import { MdOutlineFileDownload, MdShoppingBag } from "react-icons/md";
import ActivityCard from "./Components/ActivityCard";

export default function Activity() {
    const [activeTab, setActiveTab] = useState("all");
       
    const activities = [
        {
          title: "MILESTONE REACHED", activity: 'You earned the "Star Reader" achievement!', detail: `Purchased a total of ${10} story books in ${1} month` 
        },
        {
          title: "RESOURCE DOWNLOAD", activity: 'Downloaded "Space Explorers Math: Level 2"!', detail: `Interactive PDF workbook with ${25} math puzzles and printable badges.` 
        },
        {
          title: "NEW PURCHASE", activity: 'Purchased "Oceanic Biology Masterclass"', detail: `Full curriculum including ${12} video lessons and virtual field trips.` 
        },
        {
          title: "MILESTONE REACHED", activity: 'You earned the "Star Reader" achievement!', detail: `Purchased a total of ${10} story books in ${1} month` 
        },
        {
          title: "NEW PURCHASE", activity: 'Purchased "Oceanic Biology Masterclass"', detail: `Full curriculum including ${12} video lessons and virtual field trips.` 
        },
        {
          title: "RESOURCE DOWNLOAD", activity: 'Downloaded "Space Explorers Math: Level 2"!', detail: `Interactive PDF workbook with ${25} math puzzles and printable badges.` 
        }
    ]
    const milestoneClass = `bg-[#FFA952]/20 text-[#FFA952]`
    const purchasesClass = `bg-[#002F71]/10 text-[#002F71]`
    const downloadClass = `bg-[#2EC5BC]/20 text-[#2EC5BC]`
const badgeInfo = (title) => {
    switch (title) {
        case "MILESTONE REACHED":
            return {icon: <GiStarMedal/>, className: milestoneClass};
        case "NEW PURCHASE":
            return {icon: <MdShoppingBag/>, className: purchasesClass};
        case "RESOURCE DOWNLOAD": 
            return {icon: <MdOutlineFileDownload/>, className: downloadClass};
        default:
            return {icon: null, className: ""}
    
    }
}
   
  return (
    <div>
      <PagesHeader/>
      <div className="bg-[#F8FAFB] flex gap-6">
        <Sidebar/>
        <div className="flex-1 min-h-screen mt-24 md:ml-68 px-4 md:px-12 py-8">
          <h2 className="font-extrabold text-2xl text-[#4A5568]">Your Activity</h2>
          <p className="text-base/6 text-[#6B7280]">Keep track of all your activities, both old and recent.</p>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 py-8">
            <button onClick={()=>setActiveTab("all")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] ${activeTab === "all" ? "bg-[#2EC5BC] text-white" : "bg-gray-200"}`}>All</button>
            <button onClick={()=>setActiveTab("purchases")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] ${activeTab === "purchases" ? "bg-[#2EC5BC] text-white" : "bg-gray-200"}`}>Purchases</button>
            <button onClick={()=>setActiveTab("rewards")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] ${activeTab === "rewards" ? "bg-[#2EC5BC] text-white" : "bg-gray-200"}`}>Rewards</button>
            <button onClick={()=>setActiveTab("downloads")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-[#3C4948] ${activeTab === "downloads" ? "bg-[#2EC5BC] text-white" : "bg-gray-200"}`}>Downloads</button>
       
          </div>
         <div className="flex flex-col gap-8 sm:gap-10">
            {activities.map((activ, index)=>{
                const {icon, className} = badgeInfo(activ.title);
                return (
                    <ActivityCard key={index} icon={icon} title={activ.title} activity={activ.activity} detail={activ.detail} badgeClass={className}/>
                )
            })}
         </div>
         
      </div>
    </div>
    </div>
  )
}