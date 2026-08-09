import { NavLink } from "react-router";
import { MdDashboard, MdOutlineInventory2, MdOutlineBrightness5, MdOutlinePoll } from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";

export default function Sidebar(){
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${isActive ? "bg-[#2EC5BC] text-white" : ""}`;

    return (
        <div className="hidden md:flex flex-col mt-24 w-64 fixed top-0 left-0 bottom-0 bg-white gap-4 p-6 min-h-screen">
            <NavLink to="/dashboard" end className={linkClass}>
                <MdDashboard/> DASHBOARD
            </NavLink>
            <NavLink to="/dashboard/purchases" className={linkClass}>
                <MdOutlineInventory2/> PURCHASES
            </NavLink>
            <NavLink to="/dashboard/activity" className={linkClass}>
                <MdOutlinePoll/> ACTIVITY
            </NavLink>
            <NavLink to="/dashboard/rewards" className={linkClass}>
                <GiStarMedal/> REWARDS
            </NavLink>
            <NavLink to="/dashboard/settings" className={linkClass}>
                <MdOutlineBrightness5/> SETTINGS
            </NavLink>
        </div>
    )
}