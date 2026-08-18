import CreatorDashboardSidebar from "./Components/CreatorDashboardSidebar";
import profilePhoto from "./images/creator photo.png";
import { FaPlus } from "react-icons/fa";

export default function CreatorDashboard() {
    return (
        <div className="flex">
            <CreatorDashboardSidebar/>
            <div className="flex-1 ml-68 p-6">
                <header className="flex justify-between">
                    <div className="flex flex-col gap-1">
                    <h2 className="text-[#4A5568] text-2xl font-extrabold">Creator Dashboard</h2>
                    <span className="text-[#6B7280] font-[400]">{`Welcome back, ${'Lucius'}! Here's what's happening with your store.`}</span>
                </div>
                <div className="flex gap-4 pr-6">
                    <button className="bg-[#2EC5BC] px-6 shrink-0 rounded-full text-white font-bold cursor-pointer flex items-center gap-2">< FaPlus className="text-xl"/>Create New Product</button>
                    <img src={profilePhoto} alt="User profile photo" className="shrink-0" />
                </div>
                </header>               
            </div>
        </div>
    )
}