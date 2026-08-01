import { Link, useNavigate, useLocation } from "react-router";
import Navbar from "./Navbar";
import bubblesImage from "./images/bubbles.png"
import { useState, useRef } from "react";
import logo from "./images/logo.png";

export default function VerifyEmail() {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState(location.state?.email || "");
    const [digits, setDigits] = useState(["", "", "", "", "", ""]);
    //const [otp, setOtp] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [resending, setResending] = useState(false);

    const inputRefs = useRef([]);

    function handleDigitChange(index, value) {
        // only allow a single digit
        const cleaned = value.replace(/[^0-9]/g, "").slice(-1);
        const newDigit = [...digits];
        newDigit[index] = cleaned;
        setDigits(newDigit);

        // auto-advance to the next box
        if (cleaned && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    }

    function handleKeyDown(index, e) {
        // move back on backspace if current box is already empty
        if (e.key === "Backspace" && !digits[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    async function verifyOTP() {
        const otp = digits.join("");
        if (otp.length < 6) {
         return setErrorMessage("Please enter all 6 digits.")
        }
        setSubmitting(true);
        try {
        const response = await fetch("http://localhost:3500/accounts/verify-otp", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, otp})
        })
        const data = await response.json();
        if (!response.ok) {
           return setErrorMessage(data.message || 'Account verification failed. Try again.')
        }
        //return data.message; 
        navigate("/verify-success");
    } catch (er) {
        setErrorMessage(er.message)
    } finally {
        setSubmitting(false)
    }
    }

    async function resendCode() {
        setErrorMessage("");
        setResending(true);
        try {
            const response = await fetch("http://localhost:3500/accounts/resend-code", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email})
            })
            const data = await response.json()
            if (!response.ok) {
                setErrorMessage(data.message || "Couldn't resend the verification code. Try again.")
                return
            }
            setDigits(["", "", "", "", "", ""]);
            inputRefs.current[0].focus()
        } catch (er) {
            setErrorMessage(er.message || "Something went wrong while resending the verification code.")
        } finally {
            setResending(false)
        }
    }
    
    return (
        <section className="bg-[#F8FAFB]">
        <Navbar/>
        <div className="md:grid md:grid-cols-2 pt-25 min-h-screen">
            <div className="hidden md:flex bg-[#2EC5BC] flex justify-center items-center">
                <img src={bubblesImage} alt="" />
            </div>
            <div className="flex flex-col p-10 sm:p-12 py-10 gap-8 mx-auto max-w-md md:max-w-none md:w-auto border border-[14px] border-[#2EC5BC] md:border-none">
                <div className="flex flex-col">
                    <h3 className="font-bold text-[32px] text-[#002F71]">Check Your Email</h3>
                    <h4 className="text-base text-[#4A5568] font-[400]">Please enter the 6-digit code we sent to your email</h4>
                
                {!location.state?.email && (
                    <label className="font-bold text-sm text-[#002F71] p-4">
                        Email Address
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com"
                            className="block border px-5 py-2 mt-1.5 rounded-2xl border-[#BBC9C7] w-full outline-none"
                        />
                    </label>
                )}

                <div className="flex gap-3 p-10">
                    {digits.map((digit, index) => (
                        <input key={index} ref={(el) => (inputRefs.current[index] = el)}
                            type="text" inputMode="numeric" maxLength={1} value={digit}
                            onChange={(e) => handleDigitChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-14 h-14 text-center text-xl border rounded-2xl border-[#BBC9C7] outline-none focus:border-[#2EC5BC]"
                        />
                    ))}
                </div>

                {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                <p className="text-sm text-[#4A5568]">
                    Didn't get any mail?{" "}
                    <button type="button" onClick={resendCode} disabled={resending} className="text-[#2EC5BC] font-semibold cursor-pointer disabled:opacity-50">
                        {resending ? "Sending..." : "Resend Verification email"}
                    </button>
                </p>

                <button type="button" onClick={verifyOTP} disabled={submitting}
                    className="rounded-full bg-[#2EC5BC] px-10 py-3 font-semibold text-white cursor-pointer hover:opacity-[0.85] disabled:opacity-50 w-full mt-4"
                >
                    {submitting ? "Verifying..." : "Verify Account"}
                </button>
                <hr className="border-[#BBC9C7] mt-4" />

                <p className="text-sm text-[#4A5568] text-center py-4"> Still having trouble? contact <Link className="text-[#2EC5BC]">support</Link></p>
            </div>
        </div>
        </div>
        </section>
    );
}
