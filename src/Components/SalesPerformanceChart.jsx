import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";

export default function SalesPerformanceChart({ data }) {
  return (
    <div className="flex-1 bg-white rounded-[20px]  p-6">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-bold text-[#4A5568]">Sales Performance</h3>
        <div className="text-xs bg-gray-100 px-3   py-1 rounded-full text-gray-500 border-none outline-none cursor-pointer">
          <select
            className="pr-2"
            defaultValue="30"
            onChange={(e) => console.log("Range changed to:", e.target.value)}
            // mr clement you will change this to refetch chart data based on selected range
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Revenue growth over the last 30 days
      </p>

      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2EC5BC"
            fill="#2EC5BC"
            fillOpacity={0.15}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
