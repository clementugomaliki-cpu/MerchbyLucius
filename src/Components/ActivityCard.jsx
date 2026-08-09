export default function ActivityCard({icon, badgeClass, title, time, activity, detail}){
    return (
        <div className="flex gap-6 p-4 sm:p-6 border rounded-3xl bg-white border-[#BBC9C7]/50 items-center">
            <div className={`px-5 py-5 rounded-xl flex items-center justify-center text-lg ${badgeClass}`}>
                {icon}
            </div>
            <div>
                <div className="flex gap-2">
                    <h4 className={`${badgeClass} bg-transparent font-bold`}>{title}</h4>
                    <div className="w-1 h-1 rounded-full bg-[#BBC9C7]"/>
                    <p>{time}</p>
                </div>
                <p className="font-bold text-[#4A5568]">{activity}</p>
                <p className="font-[400] text-[#6B7280]">{detail}</p>
            </div>
        </div>
    )
}