import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import CreatorSection from "./CreatorSection";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <HeroSection/>
        <WhyChooseUs/>
        <CreatorSection/>
      </BrowserRouter>
    </div>
  )
}