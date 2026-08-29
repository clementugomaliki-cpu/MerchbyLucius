import { NavLink } from "react-router";
import {
  MdDashboard,
  MdOutlineInventory2,
  MdOutlineBrightness5,
  MdOutlinePoll,
} from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";
import logo from "../images/logo.png";
import creatorAvatar from "../images/creatorphoto.png";

export default function CreatorDashboardSidebar({ user }) {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl py-2 px-4 text-sm ${isActive ? "bg-[#2EC5BC] text-white" : ""}`;

  return (
    <div className="hidden md:flex flex-col w-80 fixed top-0 left-0 bottom-0 mt-24 bg-white gap-6 p-6  min-h-screen">
      {/* Profile row */}
      <div className="flex items-center gap-3 pb-4 mb-2">
        <img
          src={user?.avatar}
          alt={user?.name}
          className="w-12 h-12 rounded-xl object-cover"
        />
        <p className="font-bold text-[#4A5568] text-sm w-[90px]">
          {user?.name}
        </p>
      </div>

      <NavLink to="/creator-dashboard" end className={linkClass}>
        <MdDashboard /> DASHBOARD
      </NavLink>
      <NavLink to="/creator-dashboard/products" className={linkClass}>
        <MdOutlineInventory2 /> MY PRODUCTS
      </NavLink>
      <NavLink to="/creator-dashboard/sales" className={linkClass}>
        <MdOutlinePoll /> SALES ANALYTICS
      </NavLink>
      <NavLink to="/creator-dashboard/payouts" className={linkClass}>
        <GiStarMedal /> PAYOUTS
      </NavLink>
      <NavLink to="/creator-dashboard/settings" className={linkClass}>
        <MdOutlineBrightness5 /> SETTINGS
      </NavLink>
    </div>
  );
}
