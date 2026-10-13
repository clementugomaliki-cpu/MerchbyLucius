import cartIcon from "../images/cart.svg";
import starIcon from "../images/star.svg";
import tickIcon from "../images/tick.svg";

const iconMap = {
  sale: { icon: cartIcon, bg: "#FBDEC2" },
  review: { icon: starIcon, bg: "#2EC5BC" },
  approval: { icon: tickIcon, bg: "#578EC6" },
};

export default function RecentActivity({ activities }) {
  return (
    <div className="w-[352px] bg-white rounded-[40px] p-6">
      <h3 className="text-lg font-bold text-[#4A5568] mb-4">Recent Activity</h3>
      <div className="flex flex-col gap-4">
        {activities.map((activity) => {
          const { icon, bg } = iconMap[activity.type] ?? iconMap.sale;
          return (
            <div key={activity.id} className="flex gap-3 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: bg }}
              >
                <img src={icon} alt="" className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-[#4A5568]">{activity.message}</p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        <button className="text-sm text-teal-500 font-semibold">
          View All Activity →
        </button>
      </div>
    </div>
  );
}
