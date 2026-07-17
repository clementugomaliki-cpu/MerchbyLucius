import { Link } from "react-router";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import logo from "./images/logo.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="px-6 md:px-20 py-6 bg-white sticky top-0 z-50 border border-[#FFFFFF] shadow-xs">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Merch-by-Lucius logo" className="w-15 sm:w-20 md:w-28 cursor-pointer" />
                </Link>

                {/* Desktop nav — hidden on mobile */}
                <nav className="hidden md:flex gap-8 items-center">
                    <Link to="/" className="text-[#4A5568] font-semibold">Home</Link>
                    <Link to="/products" className="text-[#4A5568] font-semibold">Products</Link>
                    <Link to="/about" className="text-[#4A5568] font-semibold">About</Link>
                    <Link to="/sign-in" className="rounded-full bg-[#2EC5BC] px-6 py-2 text-white font-semibold">Sign In</Link>
                </nav>

                {/* Hamburger button — hidden on desktop */}
                <button
                    className="md:hidden text-2xl text-[#002F71]"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <LuX /> : <LuMenu />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
                <nav className="md:hidden flex flex-col gap-4 mt-6 pb-2">
                    <Link to="/" onClick={toggleMenu} className="text-[#4A5568] font-semibold">Home</Link>
                    <Link to="/products" onClick={toggleMenu} className="text-[#4A5568] font-semibold">Products</Link>
                    <Link to="/about" onClick={toggleMenu} className="text-[#4A5568] font-semibold">About</Link>
                    <Link to="/sign-in" onClick={toggleMenu} className="rounded-full bg-[#2EC5BC] px-6 py-2 text-white font-semibold text-center">Sign In</Link>
                </nav>
            )}
        </header>
    );
}