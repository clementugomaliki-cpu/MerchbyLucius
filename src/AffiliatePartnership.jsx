import AffiliateCard from "./Components/AffiliateCard";
import dollar from "./assets/icons/dollar-icon.svg";
import chart from "./assets/icons/chart-icon.svg";
import layers from "./assets/icons/layers-icon.svg";

export default function AffliatePartnership() {
  const cards = [
    {
      logo: dollar,
      bgColor: "bg-[#FFA952]/10",
      title: "High Commission",
      paragraph:
        "Earn up to 20% on every sale made through your unique affiliate link.",
    },
    {
      logo: chart,
      bgColor: "bg-[#2EC5BC]/10",
      title: "Real-time Data ",
      paragraph:
        "Access your personalized dashboard to track clicks, sales, and earnings in real-time.",
    },
    {
      logo: layers,
      bgColor: "bg-[#002F71]/10",
      title: "Ad Creatives",
      paragraph:
        "We provide professional banners and marketing copy to help you get started.",
    },
  ];

  return (
    <div className="w-full  flex flex-col items-center gap-16 pt-[100px] pb-[100px] px-16">
      <div className="text-center flex flex-col gap-6">
        <h2 className="text-[#002F71] leading-[48px] text-[32px] font-extrabold whitespace-nowrap">
          Afilliate Partnership
        </h2>
        <p className="font-normal text-[20px] leading-[28px] text-[#4A5568] max-w-[670px] mx-auto">
          Recommend products you love and earn industry-leading commissions on
          every referral
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-16 pt-4">
        {cards.map((card, idx) => (
          <div key={idx} className="max-w-[320px] mx-auto w-full">
            <AffiliateCard {...card} />
          </div>
        ))}
      </div>
      <button className="bg-[#2EC5BC] text-[#FFFFFF] font-semibold px-14 rounded-full flex items-center justify-center whitespace-nowrap h-12 ">
        Become an Affiliate
      </button>
    </div>
  );
}
