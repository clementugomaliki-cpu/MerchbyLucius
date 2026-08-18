import React from 'react'
import lion from "./assets/images/lion.png";
import spaceship from "./assets/space.svg";
import adventure from "./images/bundle.svg";
import phonic from "./assets/phonics.svg";
import { useDownload } from './Download'
import { useState } from 'react';
function DasshboardCard() {
   const { download, handleDownload } = useDownload()
   const [expanded, setExpanded] = useState(false);

    const card = [
    {
      title: "Alphabet Adventure Pack",
      image: lion,
      badgeText: "WORKSHEET",
      text: "Download",
      reciept: "Reciept",
    },
    {
          title: "Space Explorers Math",
          image: spaceship,
          badgeText:"MATH",
          text: "Download",
          reciept: "Reciept",
        },
    {
          title: "Alphabet Adventure Pack",
          image: adventure,
          badgeText: "WORKSHEET",
          text: "Download",
          reciept: "Reciept",
        },

        {
          title: "Phonic Fun Volume 1",
          image: phonic,
          badgeText: "WORKSHEET",
          text: "Download",
          reciept: "Reciept",
        }
    
    ]
  return (
    <div className='w-220 h-130 gap-8 '> 
      <div>
        <div className=' '>
           <h3 className='font-extrabold text-[24px] font-[Plus Jakarta Sans] text-[#4A5568]'>Your Purchases</h3>
           <p className='font-medium text-[16px] text-[#6B7280] '>Access all your learning materials in one place.</p>
        </div>
            <div className='grid grid-cols-4 w-220 gap-x-20  pt-4'>
                {card.map((c, index)=>(
                <div className='shadow-sm w-54 h-114 rounded-4xl flex-cols justify-between '>
                  <div className='w-53 h-53'>
                    <img src={c.image} alt="" className='w-full h-full object-full rounded-t-4xl' />
                    </div> 
                    <div className='pl-5'>
                    <button className='w-auto h-8 font-extrabold text-xs text-[#002F71] bg-blue-50 px-2 py-2 mt-2 rounded-full'>{c.badgeText}</button>
                    <h3 className='font-[Plus Jakarta Sans] text-lg text-[#002F71] font-semibold my-4 w-43 h-14 '>{c.title}</h3>
                    <button onClick={() => handleDownload(download.id)} className='text-[16px] bg-[#2EC5BC] py-2 text-white rounded-4xl w-42 h-10 text-center'>{c.text}</button>
                    <button className='w-42 h-10 outline-[#2EC5BC] outline rounded-4xl mt-4 text-[#2EC5BC] text-[16px] font-semibold'>{c.reciept}</button>
                    </div>
                 </div>
                ))}
            </div>
      </div>
    </div>
    
  )
}

export default DasshboardCard