import { Link, useNavigate } from "react-router";
import bubblesImage from "./images/bubbles.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import logo from "./images/logo.png";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formInput, setFormInput] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [boxChecked, setBoxChecked] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);
  const navigate = useNavigate();

  function togglePasswordType() {
    setShowPassword((prev) => !prev);
  }

  function setInput(e) {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function createAccount() {
    if (!boxChecked) {
      setErrorMessage("You must agree to the Terms of Service to continue.");
      return;
    }

    setCreatingAccount(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://web-dev-course-1.onrender.com/accounts/purchaser-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formInput,
          role: "purchaser",
          accountType: "purchaser",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Something went wrong while creating your account.");
        return;
      }

      localStorage.setItem("userRole", "purchaser");
      localStorage.setItem("user", JSON.stringify({ ...formInput, role: "purchaser" }));
      navigate("/verify-email", { state: { email: formInput.email, accountType: "purchaser" } });
    } catch (error) {
      setErrorMessage(error.message || "Unable to create account right now.");
    } finally {
      setCreatingAccount(false);
    }
  }

  return (
    <>
      <header className="px-20 py-6 bg-white fixed top-0 right-0 left-0 z-50 border border-[#FFFFFF] shadow-xs">
        <Link to="/">
          <img
            src={logo}
            alt="Merch-by-Lucius logo"
            className="w-15 sm:w-20 md:w-28 cursor-pointer"
          />
        </Link>
      </header>
      <div className="flex pt-25">
        <div className="md:h-screen md:w-2/4 bg-[#2EC5BC] flex justify-center items-center">
          <img src={bubblesImage} alt="" />
        </div>
        <div className="flex flex-col justify-center p-16 py-8 gap-8 mx-auto">
          <div className="flex flex-col">
            <h3 className="font-bold text-[32px] text-[#002F71]">
              Create Your Account
            </h3>
            <h4 className="text-base text-[#4A5568] font-[400]">
              Access the world's best educational resources today.
            </h4>
          </div>

          {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

          <form
            className="flex flex-col gap-6 mt-2"
            onSubmit={(e) => {
              e.preventDefault();
              createAccount();
            }}
          >
            <label htmlFor="name" className="font-bold text-sm text-[#002F71]">
              Full Name
              <input
                type="text"
                name="name"
                value={formInput.name}
                onChange={setInput}
                placeholder="Enter your full name"
                required
                className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"
              />
            </label>
            <label htmlFor="email" className="font-bold text-sm text-[#002F71]">
              Email Address
              <input
                type="email"
                name="email"
                value={formInput.email}
                onChange={setInput}
                placeholder="name@example.com"
                required
                className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"
              />
            </label>
            <label htmlFor="password" className="font-bold text-sm text-[#002F71]">
              Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formInput.password}
                  onChange={setInput}
                  placeholder={showPassword ? "Enter your password" : "********"}
                  required
                  className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none placeholder:font-light"
                />
                <button
                  type="button"
                  className="absolute top-1/4 right-4 text-lg"
                  onClick={togglePasswordType}
                >
                  {showPassword ? <LuEye /> : <LuEyeOff />}
                </button>
              </div>
            </label>
            <div className="flex items-center gap-3 rounded-xs">
              <input
                type="checkbox"
                checked={boxChecked}
                onChange={(e) => setBoxChecked(e.target.checked)}
                className="h-5 w-5 border border-[#BBC9C7]"
              />
              <div className="text-xs font-semibold">
                <p className="text-[#4A5568]">
                  By creating an account, you agree to our{" "}
                  <Link>
                    <span className="text-[#2EC5BC]">Terms of Service</span>
                  </Link>{" "}
                  and{" "}
                  <Link>
                    <span className="text-[#2EC5BC] block">Privacy Policy</span>
                  </Link>
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={creatingAccount}
              className="rounded-full bg-[#2EC5BC] px-10 py-3 mb-4 font-semibold text-white cursor-pointer hover:opacity-[0.85] disabled:opacity-60"
            >
              {creatingAccount ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="sm:pt-8 border-t border-[#BBC9C7] mt-4 text-base font-[400] text-[#4A5568]">
            <p>
              Already have an account?{" "}
              <Link to="/sign-in" className="text-base font-semibold text-[#2EC5BC]">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
