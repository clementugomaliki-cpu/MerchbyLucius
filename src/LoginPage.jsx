import { Link, useNavigate } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import logo from "./images/logo.png";
import { useState } from "react";
import Navbar from "./Navbar";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formInput, setFormInput] = useState({email: "", password: ""});
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

function togglePasswordType() {
    setShowPassword(!showPassword);
}
function setInput (e) {
    setFormInput((prev) =>({...prev, [e.target.name]: e.target.value }))
}

async function signIn() {
    try {
    setIsLoggingIn(true);
    const response = await fetch("https://web-dev-course-1.onrender.com/accounts/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formInput)
    }) 
    const data = await response.json();
    if (!response.ok) {
        return setErrorMessage(data.message || "Failed to log in. Check your details and try again.")
    }
    setErrorMessage("");
    setFormInput({email: "", password: ""});
    localStorage.setItem("token", data.userToken);
    navigate("/creator-dashboard");

} catch (err) {
    console.log(err);
    setErrorMessage(err.message);
} finally {
    setIsLoggingIn(false)
}
}

    return (
        <>
            <div>
                <Navbar/>
                <div className="md:grid md:grid-cols-2 pt-25 min-h-screen">
                <div className="hidden md:flex bg-[#2EC5BC] flex justify-center items-center">
                    <img src={bubblesImage} alt="bubbles image" />
                </div>
                <div className="flex flex-col p-10 sm:p-12 py-10 gap-8 mx-auto max-w-md md:max-w-none md:w-auto border border-[14px] border-[#2EC5BC] md:border-none">
                    <div className="flex flex-col">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Welcome Back</h3>
                    <h4 className="text-base text-[#4A5568] font-[400]">Sign in to your account to continue.</h4>
                </div>
                <Link className="flex border rounded-full justify-center items-center px-6 py-3 gap-3 border-[#2EC5BC] text-[#2EC5BC] text-base font-semibold">
                    <FcGoogle/>
                    Sign in with Google 
                </Link>
                <h4 className={`text-xs font-semibold text-[#3C4948] text-center ${errorMessage && "text-red-600"}`}>{errorMessage || "OR WITH EMAIL"}</h4>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    signIn()
                }}
                className="flex flex-col gap-6 mt-2">
                    <label htmlFor="email" className="font-bold text-sm text-[#002F71] flex flex-col w-full block">Email Address
                        <input type="email" name="email" placeholder="name@example.com" onChange={setInput}
                        className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full sm:w-sm md:w-md outline-none placeholder:font-light"/>
                    </label>
                    
                        <label htmlFor="password" className="font-bold text-sm flex flex-col text-[#002F71] w-full block">
                            <div className="flex justify-between">
                                <span >Password</span>
                                <Link to="/forgot-password" className="text-[#006A65]">Forgot Password?</Link>
                            </div>
                        
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" onChange={setInput}
                            placeholder={showPassword ? "Enter your password" : "********"} className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light" />
                            
                            <button type="button" className="absolute top-1/3 right-4 text-lg"                       
                            onClick={togglePasswordType}>{showPassword ? <LuEye/> : <LuEyeOff/>}</button>
                        </div>  
                    </label>
                    <button type="submit" disabled={isLoggingIn}
                    className="rounded-full bg-[#2EC5BC] px-10 py-3 font-semibold text-white cursor-pointer hover:opacity-[0.85]">{isLoggingIn ? "Signing in..." : "Sign In"}</button>
                </form>
                <div className="flex flex-col text-center ">
                    <div className="pt-8 border-t border-[#BBC9C7] text-base font-[400] text-[#4A5568]">
                        <p >Don't have an account? <Link to="/sign-up" className="text-base font-semibold text-[#2EC5BC]">Create one</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}