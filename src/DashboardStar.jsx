import React, { useState } from 'react';
import lion from "./assets/images/lion.png";
import spaceship from "./assets/space.svg";
import adventure from "./images/Bundle.svg";
import phonic from "./assets/phonics.svg";
import { IoStarOutline, IoStar } from "react-icons/io5";
export default function DashboardStar() {
  // Initialize state maps for handling star logic across multiple cards
  const [ratings, setRatings] = useState({});
  const [hovers, setHovers] = useState({});

  const cards = [
    {
      id: 1,  
      title: "Alphabet Adventure Pack",
      image: lion,
      badgeText: "WORKSHEET",
      number:"(56)",
      text: "Quick View",
    },
    {
      id: 2,   
      title: "Space Explorers Math",
      image: spaceship,
      badgeText: "MATH",
      number:"(89)",
      text: "Quick View",
    },
    {
      id: 3,  
      title: "Alphabet Adventure Pack",
      image: adventure,
      badgeText: "WORKSHEET",
      number:"(89)",
      text: "Quick View",
    },
    {
      id: 4,    
      title: "Phonic Fun Volume 1",
      image: phonic,
      badgeText: "WORKSHEET",
      number:"(89)",
      text: "Quick View",
    }
  ];

  return (
    <div className='flex-1 min-h-screen mt-24  px-4 sm:px-8 md:px-12 py-8 '>
    <div className=''>
      <div>
        <h3 className='font-extrabold text-[24px] font-[Plus Jakarta Sans] text-[#4A5568]'>Suggested for you</h3>
        <p  className='font-medium text-[16px] text-[#6B7280] '>Explore more products similar to your purchases.</p>
      </div>
      
    <div className="grid w-full min-w-0 h-auto grid-cols-2 gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        // Get the specific rating and hover state for THIS specific card
        const currentRating = ratings[card.id] || 0;
        const currentHover = hovers[card.id] || 0;

        return (
          <div key={card.id} className=" flex min-w-0 flex-col px-4 space-y-2  justify-between overflow-hidden rounded-4xl shadow-sm ">
            <div className="">
              {/* Card Image */}
              <div className='w-53 h-60'>
              <img src={card.image} alt={card.title} className=" rounded-t-3xl" />
              </div>
              
              {/* Badge */}   <div className=''>
              <span className="text-xs font-bold text-[#002F71] bg-blue-50 px-2 py-1 rounded-full">
                {card.badgeText}
              </span>
              
              {/* Title */}
              <h3 className="font-semibold text-lg w-43 h-14 text-[#002F71]">{card.title}</h3>

              {/* Star Rating Container */}
              <div className="flex gap-1 ">
                {[...Array(5)].map((_, starIndex) => {
                  const starValue = starIndex + 1; 
                  const isFilled = starValue <= (currentHover || currentRating);
                  
                  return (
                    <button
                    key={starIndex}
                    type="button"
                    className="transition-transform hover:scale-110 focus:outline-none"
                    onClick={() => setRatings(prev => ({ ...prev, [card.id]: starValue }))}
                    onMouseEnter={() => setHovers(prev => ({ ...prev, [card.id]: starValue }))}
                    onMouseLeave={() => setHovers(prev => ({ ...prev, [card.id]: 0 }))}
                    >
                      {isFilled ? (
                        <IoStar className="text-amber-400 w-4 text-[11px] h-4" />
                      ) : (
                        <IoStarOutline className="text-gray-300 w-4 text-[11px] h-4" />
                      )}
                    </button>
                  );
                })}
                <div >
                <p className=' w-7 h-4 text-[16px] text-[#9CA3AF] font-bold font-[Plus Jakarta Sans]'>{card.number}</p>
                </div>
              </div>
            </div>

            {/* Quick View Button */}
           <div className=''>
            <button className="rounded-4xl bg-[#2EC5BC] w-full py-2 my-2 text-center text-[16px] text-white transition-all bg-[#2EC5BC] hover:text-white">
              {card.text}
            </button>
           </div>
                </div>
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
}
