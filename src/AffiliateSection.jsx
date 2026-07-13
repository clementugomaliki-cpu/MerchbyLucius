import BenefitCard from "./Components/BenefitCard";
import dollarIcon from "./images/dollar.png";
import homeIcon from "./images/home.png";
import frameIcon from "./images/frame.png"

export default function AffiliateSection() {
    
    return (
        <div className="flex flex-col justify-center items-center py-25 px-16 ">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-[32px] font-extrabold text-[#002F71]">Affiliate Partnership</h2>
                <p className="font-[400] text-xl/8 text-[#4A5568]">Recommend products you love and earn industry-leading commissions <span className="block text-center">on every referral.</span></p>
            </div>
            <div className="flex gap-16 md:mt-20">
                <BenefitCard logo={<img src={dollarIcon} />} iconBg="bg-orange-50" title="High Commission" paragraph="Earn up to 20% on every sale made through your unique affiliate link."/>
                <BenefitCard logo={<img src={homeIcon}/>} iconBg="bg-green-100 opacity-[0.7]" title="Real-time Data" paragraph="Access your personalized dashboard to track clicks, sales, and earnings in real-time."/>
                <BenefitCard logo={<img src={frameIcon}/>} iconBg="bg-blue-100 opacity-[0.8]" title="Ad Creatives" paragraph="We provide professional banners and marketing copy to help you get started."/>
            </div>
            <button className="md:mt-20 bg-[#2EC5BC] px-12 py-3 rounded-full font-bold text-lg text-white cursor-pointer">Become an Affiliate</button>
        </div>
    )
}