import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiShoppingBag } from "react-icons/ti";
import { MdInsertChartOutlined } from "react-icons/md";
import { RiMedal2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

function DashboardAside() {
  const [active, setActive] = useState("DASHBOARD");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "DASHBOARD", icon: <LuLayoutDashboard /> },
    { name: "PURCHASES", icon: <TiShoppingBag /> },
    { name: "ACTIVITY", icon: <MdInsertChartOutlined /> },
    { name: "REWARDS", icon: <RiMedal2Line /> },
    { name: "SETTINGS", icon: <IoSettingsOutline /> },
  ];

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-white p-2 text-2xl text-[#4A5568] shadow-md md:hidden"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 max-w-[85vw] overflow-y-auto border-r border-[#BBC9C780] bg-white transition-transform duration-300 md:sticky md:top-0 md:z-auto md:h-screen md:w-70 md:max-w-none md:shrink-0 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 pt-16 md:pt-15">
          <div className="mb-6 mt-6 flex items-center gap-4">
            <img
              src="profiles.jpg"
              alt="James Brown"
              className="h-12 w-12 rounded-xl bg-[#91B0FA]"
            />
            <p className="pt-1 font-[Plus Jakarta Sans] text-[14px] font-bold leading-5 text-[#4A5568]">
              James Brown
            </p>
          </div>

          <nav className="space-y-4 pb-6">
            {links.map(({ name, icon }) => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  setActive(name);
                  setIsOpen(false);
                }}
                className={`flex min-h-10 w-full items-center gap-3 rounded-xl px-3 text-left ${
                  active === name
                    ? "bg-[#2EC5BC] font-bold"
                    : "font-medium"
                }`}
              >
                <span className="text-xl">{icon}</span>
                <span className="text-[11px] leading-[17px]">{name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default DashboardAside;