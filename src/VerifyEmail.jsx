import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { useState } from "react";
import logo from "./images/logo.png";

export default function VerifyEmail() {
    
    return (
        <section className="bg-#F8FAFB">
        <header className="px-20 py-6 bg-white fixed top-0 right-0 left-0 z-50 border border-[#FFFFFF] shadow-xs">
                <Link to="/">
                  <img src={logo} alt="Merch-by-Lucius logo" className="w-15 sm:w-20 md:w-28 cursor-pointer" />
                </Link>
            </header>
        <div className="grid grid-cols-2 min-h-screen">
            <div className=" bg-[#2EC5BC] flex justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>
            <div className="flex flex-col justify-center p-16 gap-8 md:mt-16 mx-auto">
                <div className="flex flex-col">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Check Your Email</h3>
                    <h4 className="text-base text-[#4A5568] font-[400]">Please enter the 6-digit code we sent to your</h4>
                <div className="flex gap-5 pt-8">
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                </div>
                
                
                
                </div>
                    <p className="text-[#4A5568]">Didn't get any mail? <Link to="" className="text-base font-semibold text-[#2EC5BC]">Resend verification email</Link></p>
                
                    <div className="sm:pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568] text-center">
                        <p >Still having trouble? contact <Link to="" className="text-base font-semibold text-[#2EC5BC]">support</Link></p>
                    </div>

                </div>
            </div>
        </section>
    )
}