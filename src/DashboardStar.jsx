import React, { useState } from 'react';
import lion from "./assets/images/lion.png";
import spaceship from "./assets/space.svg";
import adventure from "./images/bundle.svg";
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
    <div className='w-239 h-130 gap-8 pt-10 '>
    <div>
      <div>
        <h3 className='font-extrabold text-[24px] font-[Plus Jakarta Sans] text-[#4A5568]'>Suggested for you</h3>
        <p  className='font-medium text-[16px] text-[#6B7280] '>Explore more products similar to your purchases.</p>
      </div>
    <div className="grid grid-cols-4 md:grid-cols-2 h-130 lg:grid-cols-4 gap-x-6 p-6 w-239">
      {cards.map((card) => {
        // Get the specific rating and hover state for THIS specific card
        const currentRating = ratings[card.id] || 0;
        const currentHover = hovers[card.id] || 0;

        return (
          <div key={card.id} className=" shadow-sm w-54 h-103 rounded-4xl  bg-white ">
            <div className="">
              {/* Card Image */}
              <div className='w-53 h-53'>
              <img src={card.image} alt={card.title} className="w-full h-full object-full rounded-t-3xl" />
              </div>
              
              {/* Badge */}   <div className='pl-5'>
              <span className="text-xs font-bold text-[#002F71] bg-blue-50 px-2 py-1 rounded-full">
                {card.badgeText}
              </span>
              
              {/* Title */}
              <h3 className="font-semibold text-lg mt-2 mb-4 w-43 h-14 text-[#002F71]">{card.title}</h3>

              {/* Star Rating Container */}
              <div className="flex gap-1 mb-4">
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
                <div pl-4>
                <p className=' w-7 h-4 text-[16px] text-[#9CA3AF] font-bold font-[Plus Jakarta Sans]'>{card.number}</p>
                </div>
              </div>
            </div>

            {/* Quick View Button */}
           <div className='pl-5'>
            <button className="w-43 h-10  text-white rounded-4xl  text-[#2EC5BC] text-[16px] font-semibold transition-all bg-[#2EC5BC] hover:text-white">
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
