import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <HeroSection/>
      </BrowserRouter>
    </div>
  )
}