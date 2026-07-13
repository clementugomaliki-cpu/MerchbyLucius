import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import CreatorSection from "./CreatorSection";
import AffiliatePartnership from "./AffiliatePartnership";
import Featured from "./Featured.jsx";
import Footer from "./Footer.jsx";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <WhyChooseUs />
        <CreatorSection />
        <AffiliatePartnership />
        <Featured />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
