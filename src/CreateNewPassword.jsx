import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import Navbar from "./Navbar";
import logo from "./images/logo.png";
import { useState } from "react";

export default function CreateNewPassword() {
    const [showPassword, setShowPassword] = useState(false);
function togglePasswordType() {
    setShowPassword(!showPassword);
}
    return (
        <>
        <Navbar/>
        <div className="md:grid md:grid-cols-2 pt-25 md:pt-0 min-h-screen">
            <div className="hidden bg-[#2EC5BC] md:flex justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>
            <div className="min-h-screen flex flex-col md:justify-center p-10 sm:p-12 md:p-16 py-10 gap-8 mx-auto max-w-md md:max-w-none md:w-auto border border-[14px] border-[#2EC5BC] md:border-none">
                <div className="flex flex-col sm:pt-20">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Create New Password</h3>
                    <h4 className="text-base text-[#4A5568] font-[400]">Please enter and confirm your new password below</h4>
                </div>
                
                <form className="flex flex-col gap-6 mt-2">
                                         
                        <label htmlFor="password" className="font-bold text-sm flex flex-col text-[#002F71] w-full block">New Password:               
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="new-password" placeholder={showPassword ? "Enter new password" : "********"} className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light" />
                                <button type="button" className="absolute top-1/3 right-4 text-lg"                       
                                onClick={togglePasswordType}>{showPassword ? <LuEye/> : <LuEyeOff/>}</button>
                            </div>
                        </label>
                        <label htmlFor="password" className="font-bold text-sm flex flex-col text-[#002F71] w-full block">Confirm Password:                 
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="confirm-password" placeholder={showPassword ? "Confirm new password" : "********"} className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light" />
                                <button type="button" className="absolute top-1/3 right-4 text-lg"                       
                                onClick={togglePasswordType}>{showPassword ? <LuEye/> : <LuEyeOff/>}</button>
                            </div>
                        </label>
                </form>
                <div className="flex flex-col text-center ">
                    <Link to="changed-password" className="rounded-full bg-[#2EC5BC] px-10 py-3 mb-4 font-semibold text-white cursor-pointer hover:opacity-[0.85]">Reset Password</Link>
                    <div className="pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568]">
                         <Link to="/sign-in" className="text-base font-semibold text-[#2EC5BC]">Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}