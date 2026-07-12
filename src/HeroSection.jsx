import { IoIosSearch } from "react-icons/io";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center sm:py-25 sm:px-16 bg-[#F8FAFB] mt-25">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="bg-[#2EC5BC] h-2 w-2 rounded-full"></div>
                <p className="text-xs font-bold text-[#002f71]">EMPOWERING YOUNG MINDS</p>
            </div>
            <div className="max-w-4xl md:text-[48px] font-extrabold flex text-center md:mt-10"> {/*max-4xl=896px*/}
                <p className="text-[#002f71]">Turn Screen Time into <span className="text-[#2EC5BC] block">Adventure Time!</span></p>
            </div>
            <div className="max-w-2xl md:mt-10 text-xl/8 text-[#4A5568]"> {/*max-2xl=672px*/}
            <p>Premium digital products and interactive courses curated <span className="block">to make learning the most exciting part of your child's day.</span></p>
            </div>
            <div className="flex justify-between p-2 items-center border sm:mt-10 rounded-3xl border-[#BBC9C7] bg-white gap-2 w-2xl">
                <div className="flex items-center pl-6 py-3 space-x-3">
                    <IoIosSearch className="text-[#4A5568] text-xl"/>
                    <input type="text" placeholder="What would you like to learn today?" className="w-md outline-none" />
                </div>
                <button className="bg-[#2EC5BC] text-white text-base font-bold px-10 py-3 rounded-full">Search</button>
            </div>
            <div className="md:w-2xl flex gap-3 justify-center items-center mt-8">
                <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#FFA952] shadow-sm">Trending Topics:</p>
                <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#002F71] shadow-sm">Coding for Kids</p>
                <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#002F71] shadow-sm">Planning Journal</p>
                <p className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-[#002F71] shadow-sm">Creative Arts</p>
            </div>
        </div>
    )
}