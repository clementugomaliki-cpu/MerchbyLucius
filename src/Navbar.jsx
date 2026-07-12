import { Link } from "react-router"
import logo from "./images/logo.png"

export default function Navbar() {
  return (
    <div>
      <header className="flex justify-between items-center">
        <div>
          <img src={logo} alt="Merch-by-Lucius logo" className="w-15 sm:w-20 md:w-28" />
        </div>
        <div className="space-x-8">
          <Link to="/materials">Discover</Link>
          <Link to="/posts">Blog</Link>
        </div>
        <div className="space-x-6">
          <button>Login</button>
          <button>Become an Affiliate</button>
        </div>
      </header>
    </div>
  )
}