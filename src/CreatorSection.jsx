import CreatorBenefits from "./Components/CreatorBenefits";
import globeIcon from "./images/globe.png";
import noteIcon from "./images/note.png";
import cardIcon from "./images/card.png";
import matricIcon from "./images/matric.png";

export default function CreatorSection() {
  const mobileBenefits = [
    { logo: globeIcon, title: "Global Reach" },
    { logo: cardIcon, title: "Weekly Payouts" },
    { logo: noteIcon, title: "Easy Listing" },
    { logo: matricIcon, title: "Creator Support" },
  ];

  return (
    <div className="flex flex-col md:flex-row py-25 px-10 md:px-20 gap-10 bg-[#F8FAFB]">
      <div className="flex flex-col items-center text-center md:items-start md:text-left gap-8 pt-0.5">
        <h4 className="font-bold text-sm text-[#2EC5BC]">JOIN OUR NETWORK</h4>
        <h3 className="font-extrabold text-[20px] sm:text-[32px] text-[#002F71] whitespace-nowrap">
          Create & Earn as a digital Creator
        </h3>
        <p className="font-[400] text-xl/8 text-[#4A5568]">
          Turn your digital expertise into a global business. Reach thousands of
          families and make a lasting impact on how the next generation learns.
        </p>
        <div className="font-bold text-base flex flex-col items-center sm:flex-row gap-4 mt-4">
          <button className="rounded-full bg-[#2EC5BC] px-10 py-3 text-white">
            Join as Creator
          </button>
          <button className="border rounded-full border-[#2EC5BC] px-10 py-3 text-[#2EC5BC]">
            Learn How it Works
          </button>
        </div>
      </div>

      {/* MOBILE ONLY */}
      <div className="flex md:hidden flex-col items-center gap-6">
        {mobileBenefits.map((item, idx) => (
          <div key={idx} className="w-full max-w-[280px]">
            <CreatorBenefits
              logo={<img src={item.logo} />}
              title={item.title}
            />
          </div>
        ))}
      </div>

      {/* DESKTOP ONLY */}
      <div className="hidden md:flex gap-6">
        <div className="flex flex-col gap-6">
          <CreatorBenefits
            logo={<img src={globeIcon} />}
            title="Global Reach"
          />
          <CreatorBenefits logo={<img src={noteIcon} />} title="Easy Listing" />
        </div>
        <div className="pt-10 flex flex-col gap-6">
          <CreatorBenefits
            logo={<img src={cardIcon} />}
            title="Weekly Payouts"
          />
          <CreatorBenefits
            logo={<img src={matricIcon} />}
            title="Creator Support"
          />
        </div>
      </div>
    </div>
  );
}
