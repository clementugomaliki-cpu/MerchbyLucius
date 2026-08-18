import { NavLink } from "react-router";
import { MdDashboard, MdOutlineInventory2, MdOutlineBrightness5, MdOutlinePoll } from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";
import logo from "../images/logo.png"

export default function CreatorDashboardSidebar(){
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${isActive ? "bg-[#2EC5BC] text-white" : ""}`;

    return (
        <div className="hidden md:flex flex-col w-64 fixed top-0 left-0 bottom-0 bg-white gap-4 p-6 border-r border-[#BCC9C6] min-h-screen">
           <img src={logo} alt="Logo" className="w-24 md:w-28" />
            <NavLink to="/creator-dashboard" end className={linkClass}>
                <MdDashboard/> DASHBOARD
            </NavLink>
            <NavLink to="/creator-dashboard/products" className={linkClass}>
                <MdOutlineInventory2/> MY PRODUCTS
            </NavLink>
            <NavLink to="/creator-dashboard/sales" className={linkClass}>
                <MdOutlinePoll/> SALES ANALYTICS
            </NavLink>
            <NavLink to="/creator-dashboard/payouts" className={linkClass}>
                <GiStarMedal/> PAYOUTS
            </NavLink>
            <NavLink to="/creator-dashboard/settings" className={linkClass}>
                <MdOutlineBrightness5/> SETTINGS
            </NavLink>
        </div>
    )
}