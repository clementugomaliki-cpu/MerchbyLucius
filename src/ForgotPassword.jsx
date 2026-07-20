import { Link } from "react-router";
import Navbar from "./Navbar";
import bubblesImage from "./images/bubbles.png";

export default function ForgotPassword() {
   
    return (
        <>
       <Navbar/>
        <div className="md:grid md:grid-cols-2 min-h-screen">
            <div className="hidden bg-[#2EC5BC] md:flex md:justify-center min-h-screen items-center">
                <img src={bubblesImage} alt="" />
            </div>
            <div className="items-center min-h-screen flex flex-col md:justify-center mt-25 md:mt-0 pt-10 sm:p-12 md:p-16 py-10 gap-8 mx-auto max-w-md md:max-w-none md:w-auto border-[14px] border-[#2EC5BC] md:border-none">
                <div className="flex flex-col px-10 sm:px-14 md:px-16 justify-center pt-10 sm:pt-16 ">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Forgot Password?</h3>
                    <h4 className="text-base/7 text-[#4A5568] font-[400]">Enter your email address and we'll send you a link to reset your password.</h4>
                <label htmlFor="email" className="font-bold text-sm mt-8 text-[#002F71]">Email Address
                        <input type="email" name="email" placeholder="name@example.com" className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"/>
                    </label>
                     
                    <Link to="/reset-password" className="rounded-full bg-[#2EC5BC] px-10 py-3 mb-4 mt-8 text-center font-semibold text-white cursor-pointer hover:opacity-[0.85]">Send Reset Link</Link>
                    <div className="pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568]">
                        <Link to="/sign-in" className="text-base font-semibold text-[#2EC5BC] flex justify-center">Back to Login</Link>
                    </div>
                </div>
                    
                </div>
            </div>
        
    </>
    )
}