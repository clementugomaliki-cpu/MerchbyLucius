import { Link, NavLink } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";
import logo from "../images/logo.png";
import smlogo from "../images/smlogo.png";
import avatar from "../images/profile-avatar.png";
import { useState } from "react";
import {
  MdOutlineShoppingCart,
  MdNotificationsNone,
  MdDashboard,
  MdOutlineInventory2,
  MdOutlineBrightness5,
  MdOutlinePoll,
} from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";

export default function PagesHeader({ user, navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // TEMP: defaults to purchaser-side links if no navLinks prop is passed
  const links = navLinks || [
    { to: "/dashboard", label: "DASHBOARD", icon: <MdDashboard />, end: true },
    {
      to: "/dashboard/purchases",
      label: "PURCHASES",
      icon: <MdOutlineInventory2 />,
    },
    { to: "/dashboard/activity", label: "ACTIVITY", icon: <MdOutlinePoll /> },
    { to: "/dashboard/rewards", label: "REWARDS", icon: <GiStarMedal /> },
    {
      to: "/dashboard/settings",
      label: "SETTINGS",
      icon: <MdOutlineBrightness5 />,
    },
  ];

  const avatarSrc = user?.avatar || avatar;
  const displayName = user?.name || "";

  return (
    <>
      <header className="flex justify-between items-center px-6 sm:px-8 h-24 sm:h-16 bg-white fixed top-0 right-0 left-0 z-50 border-b border-[#BBC9C7]/50">
        <div>
          <Link to="/">
            <img src={smlogo} alt="logo" className="sm:hidden w-12" />
          </Link>
          <Link to="/">
            <img
              src={logo}
              alt="Merch-by-Lucius logo"
              className="hidden sm:block w-[72px] h-[26px]"
            />
          </Link>
        </div>

        <div className="flex gap-8 text-base">
          <Link to="/materials" className="hidden md:block font-semibold">
            Discover
          </Link>
          <Link to="/posts" className="hidden md:block">
            Blog
          </Link>
        </div>

        <div className="space-x-4 text-base font-semibold flex items-center">
          <div className="hidden md:flex gap-4 items-center">
            <MdOutlineShoppingCart size={24} className="text-gray-700" />
            <MdNotificationsNone size={24} className="text-gray-700" />
            <div className="w-10 h-10 bg-[#2EC5BC] rounded-full flex items-center justify-center">
              <img
                src={avatarSrc}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
          <button
            className="md:hidden shrink-0 text-3xl text-gray-800 relative z-40 p-1"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>

          {isMenuOpen && (
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          <div
            className={`flex flex-col items-start text-left absolute top-full right-0 mt-2 text-base px-4 font-semibold z-40 transition-all duration-700 origin-top-right border border-gray-200 bg-white w-56 text-black ${
              isMenuOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-3 py-4 w-full border-b border-gray-100 mb-2">
              <div className="w-9 h-9 bg-[#2EC5BC] rounded-full flex items-center justify-center shrink-0">
                <img
                  src={avatarSrc}
                  alt="profile"
                  className="w-7 h-7 rounded-full object-cover"
                />
              </div>
              <span className="font-bold text-sm">{displayName}</span>
              <div className="flex gap-2 ml-auto">
                <MdOutlineShoppingCart size={20} />
                <MdNotificationsNone size={20} />
              </div>
            </div>

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 focus:bg-[#2EC5BC] focus:text-white py-2 w-full"
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
