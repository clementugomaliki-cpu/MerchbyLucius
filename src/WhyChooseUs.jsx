import BenefitCard from "./Components/BenefitCard";
import badgeIcon from "./images/badge.png";
import lighteningIcon from "./images/lightening.png";
import starsIcon from "./images/stars.png";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col justify-center items-center py-25 px-10 md:px-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-[26px] md:text-[32px] font-extrabold text-[#002F71]">
          Why Parents Love MerchbyLucius
        </h2>
        <div className="w-20 h-1.5 bg-[#FFA952] rounded-xl"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12 md:mt-20">
        <BenefitCard
          logo={<img src={badgeIcon} />}
          iconBg="bg-white"
          title="Vetted Content"
          paragraph="Every material undergoes a quality check to ensure maximum educational impact and safety."
        />
        <BenefitCard
          logo={<img src={lighteningIcon} />}
          iconBg="bg-white"
          title="Instant Access"
          paragraph="Skip the shipping wait. Download your learning kits instantly and start your adventure in minutes."
        />
        <BenefitCard
          logo={<img src={starsIcon} />}
          iconBg="bg-white"
          title="Interactive Design"
          paragraph="Some courses feature gamified elements and interactive quizzes that keep kids motivated and curious."
        />
      </div>

      <button className="mt-12 md:mt-20 bg-[#2EC5BC] px-8 sm:px-12 py-3 rounded-full font-bold text-lg text-white">
        Explore the Bookstore
      </button>
    </div>
  );
}
