import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import logo from "./images/logo.png";
import { useState } from "react";
import Navbar from "./Navbar";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
function togglePasswordType() {
    setShowPassword(!showPassword);
}
    return (
        <>
                <div>
                    <header className="px-20 py-6 bg-white fixed top-0 right-0 left-0 z-50 border border-[#FFFFFF] shadow-xs">
                                    <Link to="/">
                                    <img src={logo} alt="Merch-by-Lucius logo" className="w-15 sm:w-20 md:w-28 cursor-pointer" />
                                    </Link>
                                </header>
                    <div className="grid grid-cols-2 pt-25 min-h-screen">
                    <div className=" bg-[#2EC5BC] flex justify-center items-center">
                        <img src={bubblesImage} alt="" />
                    </div>
                    <div className="flex flex-col p-16 py-10 gap-8 mx-auto">
                        <div className="flex flex-col">
                        <h3 className="font-bold text-[32px] text-[#002F71]">Welcome Back</h3>
                        <h4 className="text-base text-[#4A5568] font-[400]">Sign in to your account to continue.</h4>
                    </div>
                    <Link className="flex border rounded-full justify-center items-center px-6 py-3 gap-3 border-[#2EC5BC] text-[#2EC5BC] text-base font-semibold">
                        <FcGoogle/>
                        Sign in with Google 
                    </Link>
                    <h4 className="text-xs font-semibold text-[#3C4948] text-center">OR WITH EMAIL</h4>
                    <form className="flex flex-col gap-6 mt-2">
                        <label htmlFor="email" className="font-bold text-sm text-[#002F71] flex flex-col w-full block">Email Address
                            <input type="email" name="email" placeholder="name@example.com" className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full sm:w-sm md:w-md outline-none placeholder:font-light"/>
                        </label>
                        
                            <label htmlFor="password" className="font-bold text-sm flex flex-col text-[#002F71] w-full block">
                                <div className="flex justify-between">
                                    <span >Password</span>
                                    <Link to="/forgot-password" className="text-[#006A65]">Forgot Password?</Link>
                                </div>
                            
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder={showPassword ? "Enter your password" : "********"} className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light" />
                                <button type="button" className="absolute top-1/3 right-4 text-lg"                       
                                onClick={togglePasswordType}>{showPassword ? <LuEye/> : <LuEyeOff/>}</button>
                            </div>
                            
                        </label>
                    </form>
                    <div className="flex flex-col text-center ">
                        <button className="rounded-full bg-[#2EC5BC] px-10 py-3 mb-4 font-semibold text-white cursor-pointer hover:opacity-[0.85]">Sign In</button>
                        <div className="sm:pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568]">
                            <p >Don't have an account? <Link to="/sign-up" className="text-base font-semibold text-[#2EC5BC]">Create one</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>



            {/* <div className="md:hidden">
                <Navbar/>
                <div className="w-screen h-screen bg-[#2EC5BC] flex justify-center items-center py-10">
                    <div className="bg-white w-[90%] h-[95%] mt-18  mx-auto">
                        <div className="flex flex-col p-16 py-10 gap-8 mx-auto">
                        <div className="flex flex-col">
                        <h3 className="font-bold text-[32px] text-[#002F71]">Welcome Back</h3>
                        <h4 className="text-base text-[#4A5568] font-[400]">Sign in to your account to continue.</h4>
                    </div>
                    </div>

                </div>
            </div> */}
        </>
    )
}