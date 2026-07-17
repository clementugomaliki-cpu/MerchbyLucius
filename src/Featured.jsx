import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import alphabet from "./assets/images/alphabet.png";
import nature from "./assets/images/nature.png";
import spacemath from "./assets/images/spacemath.png";
import FeaturedCard from "./Components/FeaturedCard";

export default function Featured() {
  const featuredData = [
    {
      title: "Alphabet Adventure Pack",
      image: alphabet,
      badgeText: "WORKSHEET",
      badgeColor: "bg-[#2EC5BC]/90",
      reviewCount: 124,
    },
    {
      title: "Space Explorers Math",
      image: spacemath,
      badgeText: "INTERACTIVE",
      badgeColor: "bg-[#002F71]/90",
      reviewCount: 89,
    },
    {
      title: "Space Explorers Math",
      image: spacemath,
      badgeText: "INTERACTIVE",
      badgeColor: "bg-[#002F71]/90",
      reviewCount: 89,
    },
    {
      title: "Nature Journaling Kit",
      image: nature,
      badgeText: "EBOOK",
      badgeColor: "bg-[#2EC5BC]/90",
      reviewCount: 56,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-24 px-10 md:py-[100px] md:px-20 bg-[#F8FAFB]">
      <div className="w-full">
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-start gap-2">
            <h2 className="font-extrabold text-[32px] text-[#002F71] leading-[40px] whitespace-nowrap">
              Featured Resources
            </h2>
            <p className="font-normal text-[18px] leading-[28px] text-[#4A5568]">
              Hand-picked materials to inspire curiosity this week.
            </p>
          </div>
          <div className="text-[#2EC5BC] font-bold text-[18px] flex flex-row items-center gap-2">
            <Link>Browse All Collections</Link>
            <FaArrowRight />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-16">
          {featuredData.map((feat, idx) => (
            <div key={idx} className={idx === 0 ? "" : "hidden sm:block"}>
              <FeaturedCard {...feat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
