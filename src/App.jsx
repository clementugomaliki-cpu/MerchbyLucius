import { BrowserRouter, Routes, Route } from "react-router";

import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";


import AffiliatePartnership from "./AffiliatePartnership";
import Featured from "./Featured.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<SignUpPage/>}/>
        </Routes>

        <AffiliatePartnership />
        <Featured />
        <Footer />

      </BrowserRouter>
    </div>
  );
}
