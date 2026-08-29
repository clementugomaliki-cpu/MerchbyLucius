import { useState } from "react";
import { FaSearch, FaSlidersH, FaPlus } from "react-icons/fa";
import CreatorDashboardSidebar from "./Components/CreatorDashboardSidebar";
import PagesHeader from "./Components/PagesHeader";
import ProductSection from "./Components/ProductSection";
import alphabetPackImg from "./images/alphabet-pack.png";
import spaceExplorersImg from "./images/space-explorers.png";
import alphabetBundleImg from "./images/alphabet-bundle.png";
import phonicsImg from "./images/phonics.png";
import creatorAvatar from "./images/creatorphoto.png";
import {
  MdDashboard,
  MdOutlineInventory2,
  MdOutlinePoll,
  MdOutlineBrightness5,
} from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";

export default function MyProducts() {
  const user = { name: "Lucius", avatar: creatorAvatar };

  const creatorNavLinks = [
    {
      to: "/creator-dashboard",
      label: "DASHBOARD",
      icon: <MdDashboard />,
      end: true,
    },
    {
      to: "/creator-dashboard/products",
      label: "MY PRODUCTS",
      icon: <MdOutlineInventory2 />,
    },
    {
      to: "/creator-dashboard/sales",
      label: "SALES ANALYTICS",
      icon: <MdOutlinePoll />,
    },
    {
      to: "/creator-dashboard/payouts",
      label: "PAYOUTS",
      icon: <GiStarMedal />,
    },
    {
      to: "/creator-dashboard/settings",
      label: "SETTINGS",
      icon: <MdOutlineBrightness5 />,
    },
  ];

  const mockProducts = [
    {
      id: 1,
      image: alphabetPackImg,
      title: "Alphabet Adventure Pack",
      tag: "WORKSHEET",
    },
    {
      id: 2,
      image: spaceExplorersImg,
      title: "Space Explorers Math",
      tag: "MATH",
    },
    {
      id: 3,
      image: alphabetBundleImg,
      title: "Alphabet Adventure Pack",
      tag: "BUNDLE",
    },
    { id: 4, image: phonicsImg, title: "Phonics Fun Volume 1", tag: "PHONICS" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex mt-24 sm:mt-16 overflow-x-hidden">
      <PagesHeader user={user} navLinks={creatorNavLinks} />
      <CreatorDashboardSidebar user={user} />
      <div className="flex-1 w-full ml-0 md:ml-80 p-4 sm:p-6 bg-[#F2F4F5]">
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 min-h-[106px]">
          <div className="flex flex-col gap-1 w-full sm:w-[297px]">
            <p className="text-xl sm:text-2xl font-extrabold text-[#4A5568]">{`Hello, ${user.name}! 👋`}</p>
            <span className="text-[#6B7280] text-sm">
              Ready for today's products adventure?
            </span>
          </div>

          <button
            className="w-full sm:w-[312px] h-12 rounded-full bg-[#2EC5BC] text-white flex items-center justify-center gap-2"
            style={{
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "1.6px",
              textTransform: "uppercase",
            }}
            onClick={() => console.log("Create new product")}
          >
            <FaPlus /> Create New Product
          </button>
        </header>

        <div className="w-full max-w-[1021px] flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between border border-[#E2E7FF] rounded-xl bg-white p-4 mt-10">
          <div className="relative w-full sm:w-[384px]">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[46px] rounded-lg border border-[#BBCAC6] bg-[#FAF8FF] pl-10 pr-4 text-sm text-[#131B2E] outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select className="min-w-[130px] h-[42px] rounded-lg border border-[#BBCAC6] bg-[#FAF8FF] text-sm font-medium text-[#131B2E] px-3 outline-none">
              <option>All Categories</option>
            </select>
            <select className="min-w-[130px] h-[42px] rounded-lg border border-[#BBCAC6] bg-[#FAF8FF] text-sm font-medium text-[#131B2E] px-3 outline-none">
              <option>All Statuses</option>
            </select>
            <button className="flex items-center gap-2 h-[42px] px-4 rounded-lg border border-[#BBCAC6] bg-[#FAF8FF] text-sm font-medium text-[#131B2E] whitespace-nowrap">
              <FaSlidersH /> More Filters
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto">
          <ProductSection
            title="Your Products"
            subtitle="Manage and track your educational materials"
            products={mockProducts}
          />
        </div>
      </div>
    </div>
  );
}
