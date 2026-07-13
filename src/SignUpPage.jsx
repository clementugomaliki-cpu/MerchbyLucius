import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png"
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function SignUpPage() {
    return (
        <div className="flex">
            <div className="md:h-screen md:w-2/4 bg-[#2EC5BC] flex justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>
            <div className="flex flex-col justify-center p-16 py-8 gap-8 mx-auto">
                <div className="flex flex-col">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Create Your Account</h3>
                    <h4 className="text-base text-[#4A5568] font-[400]">Access the world's best educational resources today.</h4>
                </div>
                <form className="flex flex-col gap-6 mt-2">
                    <label htmlFor="name" className="font-bold text-sm text-[#002F71]">Full Name
                        <input type="text" name="name" placeholder="Enter your full name" className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"/>
                    </label>
                     <label htmlFor="email" className="font-bold text-sm text-[#002F71]">Email Address
                        <input type="email" name="email" placeholder="name@example.com" className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"/>
                    </label>
                     <label htmlFor="password" className="font-bold text-sm text-[#002F71]">Full Name
                        <input type="password" name="password" placeholder="********" className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light" />
                        <LuEye/>
                    </label>
                    <div className="flex items-center gap-3 rounded-xs">
                        <div className="h-5 w-5 border border-[#BBC9C7]"></div>
                        <div className="text-xs font-semibold">
                            <p className="text-[#4A5568]">By creating an account, you agree to our <Link><span className="text-[#2EC5BC]">Terms of Service</span></Link> and <Link><span className="text-[#2EC5BC] block">Privacy Policy</span></Link></p>
                        </div>
                    </div>
                </form>
                <div className="flex flex-col text-center">
                    <button className="rounded-full bg-[#2EC5BC] px-10 py-3 font-semibold text-white cursor-pointer hover:opacity-[0.85]">Create account</button>
                    <p className="sm:pt-8 text-base font-[400] text-[#4A5568]">Already have an account? <Link className="text-base font-semibold text-[#2EC5BC]">Log in</Link></p>
                </div>
            </div>
        </div>
    )
}