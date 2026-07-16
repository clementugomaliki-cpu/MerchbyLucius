import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png"
import logo from "./images/logo.png";

export default function ForgotPassword() {
   
    return (
        <>
        <header className="px-20 py-6 bg-white fixed top-0 right-0 left-0 z-50 border border-[#FFFFFF] shadow-xs">
                        <Link to="/">
                          <img src={logo} alt="Merch-by-Lucius logo" className="w-15 sm:w-20 md:w-28 cursor-pointer" />
                        </Link>
                    </header>
        <div className="grid grid-cols-2 pt-25 min-h-screen">
            <div className=" bg-[#2EC5BC] flex justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>
            <div className="flex flex-col items-center p-16 gap-8 mx-auto">
                <div className="flex flex-col px-16">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Forgot Password?</h3>
                    <h4 className="text-base/7 text-[#4A5568] font-[400]">Enter your email address and we'll send you a link to <span className="block">reset your password.</span></h4>
                <label htmlFor="email" className="font-bold text-sm mt-8 text-[#002F71]">Email Address
                        <input type="email" name="email" placeholder="name@example.com" className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"/>
                    </label>
                     
                    <Link to="/reset-password" className="rounded-full bg-[#2EC5BC] px-10 py-3 mb-4 mt-8 text-center font-semibold text-white cursor-pointer hover:opacity-[0.85]">Send Reset Link</Link>
                    <div className="sm:pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568]">
                        <Link to="/sign-in" className="text-base font-semibold text-[#2EC5BC] flex justify-center">Back to Login</Link>
                    </div>
                </div>
                    
                </div>
            </div>
        
    </>
    )
}