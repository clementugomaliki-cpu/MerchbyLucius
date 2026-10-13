export default function StatCard({ title, badgeText, badgeColor, stats }) {
  return (
    <div className="flex-1 bg-white rounded-[20px] border border-[#BBC9C7]/50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-[#4A5568]">{title}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}
        >
          {badgeText}
        </span>
      </div>
      <div className="flex gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-50 rounded-xl px-5 py-4 flex-1">
            <p className="text-2xl font-extrabold text-[#2EC5BC]">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
