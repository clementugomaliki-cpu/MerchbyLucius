import { Link, useNavigate } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { LuEye, LuEyeOff, LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import logo from "./images/logo.png";
import smlogo from "./images/smlogo.png"
import Navbar from "./Navbar";

export default function CreatorForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formInput, setFormInput] = useState({name: "", email: "", password: ""});
    const [errorMessage, setErrorMessage] = useState("");
    const [boxChecked, setBoxChecked] = useState(false);
    //const [accountCreated, setAccountCreated] = useState(false);
    const navigate = useNavigate();
    
function togglePasswordType() {
    setShowPassword(!showPassword);
};
function setInput(e) {
    setFormInput(prev =>({...prev, [e.target.name]: e.target.value}))
};

async function createAccount() {
    if (!boxChecked) {
        setErrorMessage("You must agree to the Terms of Service to continue.")
        return
    }
    try {
    const response = await fetch("http://localhost:3500/accounts/creator-register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formInput)
    });
    const data = await response.json();
    if (!response.ok) {
        setErrorMessage(data.message || "Something went wrong.")
        return
    }
    //setAccountCreated(true);
    navigate("/verify-email");
    setErrorMessage("");
    setFormInput({name: "", email: "", password: ""});
} catch (error) {
    setErrorMessage(error.message)
}
}
    return (
    <>
        <Navbar/>
        <div className="flex pt-25 min-h-screen">
        <div className="hidden md:flex w-2/4 bg-[#2EC5BC]  justify-center items-center">
            <img src={bubblesImage} alt="bubbles image" />
        </div>
        <div className="flex flex-col p-10 sm:p-12 py-10 gap-8 mx-auto max-w-md md:max-w-none md:w-auto border border-[14px] border-[#2EC5BC] md:border-none">
            <div className="flex flex-col">
                <h3 className="font-bold text-[32px] text-[#002F71]">Create Your Account</h3>
                <h4 className="text-base text-[#4A5568] font-[400]">Contribute to providing the world's best educational resources today.</h4>
            </div>
            <form className="flex flex-col gap-6 mt-2"
                onSubmit={(e)=>{
                    e.preventDefault();
                    createAccount();
                }}
            >
                <label htmlFor="name" className="font-bold text-sm text-[#002F71]">Full Name
                    <input type="text" name="name" placeholder="Enter your full name" required onChange={setInput}
                    className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"/>
                </label>
                    <label htmlFor="email" className="font-bold text-sm text-[#002F71]">Email Address
                    <input type="email" name="email" placeholder="name@example.com" required onChange={setInput}
                    className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"/>
                </label>
                    <label htmlFor="password" className="font-bold text-sm text-[#002F71]">Password
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder={showPassword ? "Enter your password" : "********"} 
                        required onChange={setInput}
                        className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light" />
                        <button type="button" className="absolute top-1/4 right-4 text-lg"                       
                            onClick={togglePasswordType}>{showPassword ? <LuEye/> : <LuEyeOff/>}</button>
                    </div>
                </label>
                <div className="flex items-center gap-3 rounded-xs">
                    <input type="checkbox" required checked={boxChecked} onChange={(e)=>setBoxChecked(e.target.checked)}
                    className="h-5 w-5 border border-[#BBC9C7] "/>
                    <div className="text-xs font-semibold">
                        <p className="text-[#4A5568]">By creating an account, you agree to our <Link><span className="text-[#2EC5BC]">Terms of Service</span></Link> and <Link><span className="text-[#2EC5BC] :block">Privacy Policy</span></Link></p>
                    </div>
                </div>
                <div className="flex flex-col text-center ">
                    <button className="rounded-full bg-[#2EC5BC] px-10 py-3 mb-4 font-semibold text-white cursor-pointer hover:opacity-[0.85]">Create account</button>
                    {/* <div className="pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568]">
                        <p >Already have an account? <Link to="/sign-in" className="text-base font-semibold text-[#2EC5BC]">Log in</Link></p>
                    </div> */}
                </div>
            </form>
            {/* {accountCreated && (
                <p>Account Successfully Created. <Link to="/dashboard">Go to Your Dashboard</Link></p>
            )}; */}
            {errorMessage && (
                <p>Your account creation failed. Check your details and try again.</p>
            )}
            
        </div>
    </div>
</>
)
}