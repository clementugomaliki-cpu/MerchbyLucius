import { Link } from "react-router";
import bubblesImage from "./images/bubbles.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import logo from "./images/logo.png";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordType() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white px-6 md:px-20 py-6 shadow-sm">
        <Link to="/">
          <img
            src={logo}
            alt="Merch-by-Lucius logo"
            className="w-15 sm:w-20 md:w-28 cursor-pointer"
          />
        </Link>
      </header>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row min-h-screen pt-24">
        {/* Left Bubble Panel */}
        <div className="hidden md:flex w-1/2 min-h-screen bg-[#2EC5BC]">
          <img
            src={bubblesImage}
            alt="Background bubbles"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Panel */}
        <div className="flex-1 flex items-center justify-center px-6 py-8 md:px-12">
          <div className="w-full max-w-md lg:max-w-lg flex flex-col gap-8">
            {/* Heading */}
            <div>
              <h3 className="font-bold text-[28px] md:text-[36px] text-[#002F71] leading-tight">
                Create Your Account
              </h3>

              <h4 className="text-base text-[#4A5568] mt-2">
                Access the world's best educational resources today.
              </h4>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-6">
              {/* Full Name */}
              <label
                htmlFor="name"
                className="font-bold text-sm text-[#002F71]"
              >
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="block w-full h-12 px-5 mt-2 rounded-2xl border border-[#BBC9C7] outline-none placeholder:font-light"
                />
              </label>

              {/* Email */}
              <label
                htmlFor="email"
                className="font-bold text-sm text-[#002F71]"
              >
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="block w-full h-12 px-5 mt-2 rounded-2xl border border-[#BBC9C7] outline-none placeholder:font-light"
                />
              </label>

              {/* Password */}
              <label
                htmlFor="password"
                className="font-bold text-sm text-[#002F71]"
              >
                Password
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={
                      showPassword ? "Enter your password" : "********"
                    }
                    className="block w-full h-12 px-5 rounded-2xl border border-[#BBC9C7] outline-none placeholder:font-light"
                  />

                  <button
                    type="button"
                    onClick={togglePasswordType}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-500"
                  >
                    {showPassword ? <LuEye /> : <LuEyeOff />}
                  </button>
                </div>
              </label>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 border border-[#BBC9C7]"
                />

                <p className="text-xs text-[#4A5568] leading-5">
                  By creating an account, you agree to our{" "}
                  <Link className="text-[#2EC5BC] font-semibold">
                    Terms of Service
                  </Link>
                  and
                  <Link className="text-[#2EC5BC] font-semibold">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </form>

            {/* Button */}
            <div className="flex flex-col">
              <Link
                to="/verify-email"
                className="h-12 rounded-full bg-[#2EC5BC] flex items-center justify-center text-white font-semibold hover:opacity-90 transition"
              >
                Create Account
              </Link>

              <div className="border-t border-[#BBC9C7] mt-8 pt-6 text-center text-[#4A5568]">
                Already have an account?{" "}
                <Link to="/sign-in" className="font-semibold text-[#2EC5BC]">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
