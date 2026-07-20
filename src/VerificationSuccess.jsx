import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { useState } from "react";
import Navbar from "./Navbar";
import logo from "./images/logo.png";
import verifiedIcon from "./images/Overlay.png";
import outerLayer from "./images/Outer pulse effect.png";

export default function VerificationSuccess() {
    
    return (
        <section className="bg-[#F8FAFB]">
        <Navbar/>
        <div className="md:grid md:grid-cols-2 pt-25 md:pt-0 min-h-screen">
            <div className="hidden md:flex min-h-screen bg-[#2EC5BC] justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>

            <div className="min-h-screen flex flex-col md:justify-center items-center p-10 sm:p-12 md:p-16 py-10 gap-8 mx-auto max-w-md md:max-w-none md:w-auto border-[14px] border-[#2EC5BC] md:border-none">
                <div className="pt-16 relative">
                    <img src={verifiedIcon} alt="success icon" className="absolute translate-y-1/9 translate-x-1/13"/>
                    <img src={outerLayer} alt="" />
                </div>
                <div className="flex flex-col items-center text-center px-10 sm:px-16">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Verification Successful</h3>
                    <h4 className="text-base/7 text-[#4A5568] font-[400]">Your email has been verified. You can now access your account and start exploring our educational resources.</h4>
                </div>
                    <Link className="rounded-full flex items-center justify-center bg-[#2EC5BC] px-10 sm:px-20 py-3 mb-4 font-semibold text-white cursor-pointer hover:opacity-[0.85]">Go to Dashboard</Link>
                </div>
            </div>
        </section>
    )
}