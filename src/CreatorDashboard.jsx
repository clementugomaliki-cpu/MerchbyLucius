import CreatorDashboardSidebar from "./Components/CreatorDashboardSidebar";
import profilePhoto from "./images/creator photo.png";
import { FaPlus } from "react-icons/fa";
import PagesHeader from "./Components/PagesHeader";
import moneyBadgeIcon from "./images/Container.svg";
import StatCard from "./Components/StatCard";
import SalesPerformanceChart from "./Components/SalesPerformanceChart";
import RecentActivity from "./Components/RecentActivity";
import ProductSection from "./Components/ProductSection";
import alphabetPackImg from "./images/alphabet-pack.png";
import spaceExplorersImg from "./images/space-explorers.png";
import alphabetBundleImg from "./images/alphabet-bundle.png";
import phonicsImg from "./images/phonics.png";
import RewardsFooter from "./Components/RewardsFooter";

export default function CreatorDashboard() {
  // TEMPORARY MOCK DATA — replace with your real API data. For you Mr. Clement

  // make sure users has this structure
  const user = {
    name: "Lucius",
    status: "active",
  };

  // make sure the stats has this strucrure
  const mockStats = {
    totalEarnings: 342.5,
    last7Days: {
      newEarnings: 2,
      downloads: 5,
    },
    last28Days: {
      totalEarnings: 8,
      downloads: 12,
    },
  };

  // make sure the chartData has this structure
  const mockChartData = [
    { date: "May 01", revenue: 20 },
    { date: "May 10", revenue: 45 },
    { date: "May 20", revenue: 30 },
    { date: "May 30", revenue: 60 },
  ];

  // the activity structure
  const mockActivity = [
    {
      id: 1,
      type: "sale",
      message: "New sale: Starlight Hoodie",
      time: "2 minutes ago",
    },
    {
      id: 2,
      type: "review",
      message: "New 5-star review from Sarah B.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "approval",
      message: 'Product "Cosmic Cap" approved!',
      time: "5 hours ago",
    },
    {
      id: 4,
      type: "sale",
      message: "New sale: Neon Notebook",
      time: "Yesterday",
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

  const mockTopProducts = [
    {
      id: 1,
      image: alphabetPackImg,
      title: "Alphabet Adventure Pack",
      tag: "WORKSHEET",
      rating: 5,
      reviewCount: 56,
    },
    {
      id: 2,
      image: spaceExplorersImg,
      title: "Space Explorers Math",
      tag: "MATH",
      rating: 5,
      reviewCount: 89,
    },
    {
      id: 3,
      image: alphabetBundleImg,
      title: "Alphabet Adventure Pack",
      tag: "BUNDLE",
      rating: 5,
      reviewCount: 89,
    },
    {
      id: 4,
      image: phonicsImg,
      title: "Phonics Fun Volume 1",
      tag: "PHONICS",
      rating: 5,
      reviewCount: 89,
    },
  ];

  return (
    <div className="flex mt-24">
      <PagesHeader />
      <CreatorDashboardSidebar />
      <div className="flex-1 ml-68 p-6 bg-[#F2F4F5]">
        <header className="flex justify-between items-center">
          {/* left */}
          <div className="flex flex-col gap-1 text-black">
            <p className="text-base font-extrabold text-[#4A5568]">{`Hello, ${user.name}! 👋`}</p>
            <span className="text-[#6B7280]">
              Ready for today's products adventure?
            </span>
          </div>

          {/* right */}
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow px-5 py-3">
            <div className="w-14 h-14 rounded-2xl bg-[#FFA952] flex items-center justify-center shrink-0">
              <img src={moneyBadgeIcon} alt="" className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 tracking-wide">
                TOTAL EARNINGS
              </p>
              <p className="text-xl font-bold text-[#1E3A5F]">{`N${mockStats.totalEarnings}`}</p>
            </div>
          </div>
        </header>
        <div className="flex gap-6 mt-6">
          <StatCard
            title="Last 7 Days"
            badgeText="Live Activity"
            badgeColor="bg-teal-100 text-teal-600"
            stats={[
              { value: mockStats.last7Days.newEarnings, label: "New Earnings" },
              { value: mockStats.last7Days.downloads, label: "Downloads" },
            ]}
          />
          <StatCard
            title="Last 28 Days"
            badgeText="Monthly Recap"
            badgeColor="bg-blue-100 text-blue-600"
            stats={[
              {
                value: mockStats.last28Days.totalEarnings,
                label: "Total Earnings",
              },
              { value: mockStats.last28Days.downloads, label: "Downloads" },
            ]}
          />
        </div>
        <div className="flex gap-6 mt-6">
          <SalesPerformanceChart data={mockChartData} />
          <RecentActivity activities={mockActivity} />
        </div>
        <ProductSection
          title="Your Products"
          subtitle="Manage and track your educational materials"
          products={mockProducts}
        />
        <div className="flex flex-col gap-6 mt-6">
          <ProductSection
            title="Top Performing Products"
            subtitle="Explore your top performing products here."
            products={mockTopProducts}
          />
          <RewardsFooter
            salesCount={mockStats.last28Days.totalEarnings}
            onViewSales={() => console.log("View sales clicked")}
          />
        </div>
      </div>
    </div>
  );
}
