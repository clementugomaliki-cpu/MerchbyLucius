import { BrowserRouter, Routes, Route } from "react-router";

import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
