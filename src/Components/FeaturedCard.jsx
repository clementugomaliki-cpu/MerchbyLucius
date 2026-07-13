import { Link } from "react-router";
import star from "../assets/icons/star.svg";

export default function FeaturedCard({
  title,
  image,
  badgeText,
  badgeColor,
  reviewCount,
}) {
  return (
    <div className="flex flex-col w-full bg-white border border-[#F3F4F6] rounded-[32px] overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
        <div
          className={`${badgeColor} absolute top-4 left-4 text-white text-[10px] font-bold py-[6.5px] px-4 rounded-full `}
        >
          {badgeText}
        </div>
      </div>
      <div className=" flex flex-col w-full gap-3 p-8">
        <h3 className=" font-bold text-[20px] leading-[28px] text-[#002F71] max-w-[180px]">
          {title}
        </h3>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <img
                key={idx}
                src={star}
                alt="star"
                className=" h-[11.08px] w-[11.67px]"
              />
            ))}
          </div>
          <span className="text-[#9CA3AF] font-bold text-[12px] leading-[16px]">
            ({reviewCount})
          </span>
        </div>
        <button className=" w-full  bg-[#2EC5BC] text-[#FFFFFF] py-3 rounded-[24px] font-semibold leading-[24px] text-[16px] flex items-center justify-center">
          Quick View
        </button>
      </div>
    </div>
  );
}
