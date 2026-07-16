import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { useState } from "react";
import logo from "./images/logo.png";
import verifiedIcon from "./images/Overlay.png";
import outerLayer from "./images/Outer pulse effect.png";

export default function PasswordChanged() {
    
    return (
        <section className="bg-#F8FAFB">
        <header className="px-20 py-6 bg-white fixed top-0 right-0 left-0 z-50 border border-[#FFFFFF] shadow-xs">
                <Link to="/">
                  <img src={logo} alt="Merch-by-Lucius logo" className="w-15 sm:w-20 md:w-28 cursor-pointer" />
                </Link>
            </header>
        <div className="grid grid-cols-2 ">
            <div className="md:h-screen bg-[#2EC5BC] flex justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>

            <div className="flex flex-col justify-center items-center px-24 gap-8 mx-auto">
                <div className="pt-16 relative">
                    <img src={verifiedIcon} alt="success icon" className="absolute bottom-1/100 right-1/15"/>
                    <img src={outerLayer} alt="" />
                </div>
                <div className="flex flex-col items-center text-center px-16">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Password Change Successful</h3>
                    <h4 className="text-base/7 text-[#4A5568] font-[400]">Your password has been successfully updated. You can use your new password to log into your account.</h4>
                </div>
                    <Link to="/sign-in" className="rounded-full flex items-center justify-center bg-[#2EC5BC] px-30 py-3 mb-4 font-semibold text-white cursor-pointer hover:opacity-[0.85]">Go to Login</Link>
                </div>
            </div>
        </section>
    )
}