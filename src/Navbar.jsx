import { Link } from "react-router"
import logo from "./images/logo.png"

export default function Navbar() {
  return (
    <div>
      <header className="flex justify-between items-center px-20 py-6 bg-white fixed top-0 right-0 left-0 z-50">
        <div>
          <img src={logo} alt="Merch-by-Lucius logo" className="w-15 sm:w-20 md:w-28" />
        </div>
        <div className="space-x-8 text-base">
          <Link to="/materials" className=" font-semibold">Discover</Link>
          <Link to="/posts">Blog</Link>
        </div>
        <div className="space-x-6 text-base font-semibold">
          <Link to="/sign-in">
            <button className="border px-8 py-3 rounded-full border-[#2EC5BC] text-[#2EC5BC]">Login</button>
          </Link>
          <button className="bg-[#2EC5BC] text-white px-8 py-3 rounded-full">Become an Affiliate</button>
        </div>
      </header>
    </div>
  )
}