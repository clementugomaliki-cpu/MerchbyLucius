import { IoIosSearch } from "react-icons/io";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 sm:py-25 sm:px-16 bg-[#F8FAFB] mt-25">
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
        <div className="bg-[#2EC5BC] h-2 w-2 rounded-full"></div>
        <p className="text-xs font-bold text-[#002f71]">
          EMPOWERING YOUNG MINDS
        </p>
      </div>

      <div className="max-w-4xl text-[28px] md:text-[48px] font-extrabold flex text-center mt-6 md:mt-10">
        <p className="text-[#002f71]">
          Turn Screen Time into{" "}
          <span className="text-[#2EC5BC] block">Adventure Time!</span>
        </p>
      </div>

      <div className="max-w-2xl mt-6 md:mt-10 text-base md:text-xl/8 text-[#4A5568]">
        <p className="w-[290px] sm:w-xs md:w-2xl px-2 md:px-0 text-base/8 md:text-xl/8 flex flex-wrap text-center md:text-left">
          Premium digital products and interactive courses curated
            to make learning the most exciting part of your child's day.
        </p>
      </div>

      <div className="flex justify-between p-2 items-center border mt-8 sm:mt-10 rounded-3xl border-[#BBC9C7] bg-white gap-2 w-full max-w-2xl">
        <div className="flex items-center pl-4 sm:pl-6 py-3 space-x-3 flex-1 min-w-0">
          <IoIosSearch className="text-[#4A5568] text-xl shrink-0" />
          <input
            type="text"
            placeholder="What would you like to learn today?"
            className="w-full outline-none min-w-0 placeholder:text-sm sm:placeholder:text-base"
          />
        </div>
        <button className="bg-[#2EC5BC] text-white text-xs sm:text-sm md:text-base font-bold px-4 sm:px-6 md:px-10 py-2 sm:py-3 rounded-full shrink-0">
          Search
        </button>
      </div>

      <div className="w-full max-w-2xl flex flex-wrap gap-3 justify-center items-center mt-8">
        <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#FFA952]">
          Trending Topics:
        </p>
        <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#002F71]">
          Coding for Kids
        </p>
        <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#002F71]">
          Planning Journal
        </p>
        <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#002F71] ">
          Creative Arts
        </p>
      </div>
    </div>
  );
}
