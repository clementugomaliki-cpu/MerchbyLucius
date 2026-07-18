import { Link } from "react-router";
import Navbar from "./Navbar";
import bubblesImage from "./images/bubbles.png"
import { useState } from "react";
import logo from "./images/logo.png";

export default function VerifyEmail() {
    
    return (
        <section className="bg-#F8FAFB">
        <Navbar/>
        <div className="md:grid md:grid-cols-2 pt-25 min-h-screen">
            <div className="hidden md:flex bg-[#2EC5BC] min-h-screen flex justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>
            <div className="min-h-screen flex flex-col md:justify-center p-10 sm:p-12 md:p-16 py-10 gap-8 mx-auto max-w-md md:max-w-none md:w-auto border border-[14px] border-[#2EC5BC] md:border-none">
                <div className="flex flex-col">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Check Your Email</h3>
                    <h4 className="text-base text-[#4A5568] font-[400]">Please enter the 6-digit code we sent to your email</h4>
                <div className="flex gap-1 sm:gap-3 md:gap-5 pt-8">
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                    <div className="h-14 w-12 border border-[#BBC9C7] rounded-xl"/>
                </div>
                
                </div>
                    <p className="text-[#4A5568]">Didn't get any mail? <Link to="" className="text-base font-semibold text-[#2EC5BC]">Resend verification email</Link></p>
                
                    <div className="pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568] text-center">
                        <p >Still having trouble? contact <Link to="" className="text-base font-semibold text-[#2EC5BC]">support</Link></p>
                    </div>

                    <Link to="/dashboard">Click here just to test page</Link>
                </div>
            </div>
        </section>
    )
}