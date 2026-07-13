import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import CreatorSection from "./CreatorSection";
import AffliatePartnership from "./AffiliatePartnership";
import Featured from "./Featured";
import Footer from "./Footer";
export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <WhyChooseUs/>
        <CreatorSection/>
        <AffliatePartnership/>
        <Featured/>
        <Footer/>
    </div>
  )
}