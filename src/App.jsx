import { BrowserRouter, Routes, Route } from "react-router";

import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<LoginPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
