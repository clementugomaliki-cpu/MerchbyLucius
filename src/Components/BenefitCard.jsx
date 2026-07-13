export default function BenefitCard({logo, title, paragraph, iconBg}) {
        return (
            <div className="flex flex-col justify-center items-center text-center w-[320px] h-[343px] p-10 gap-4 bg-[#F8FAFB] shadow-sm rounded-3xl"> 
                <div className={`w-16 h-16 ${iconBg} flex justify-center items-center rounded-full shadow-md`}>
                    <div className="w-5">{logo}</div>
                </div>
                <h3 className="pt-4 font-bold text-2xl text-[#002F71]">{title}</h3>
                <p className="text-base/7 font-[400] text-[#4A5568]">{paragraph}</p>
            </div>
        )
    }