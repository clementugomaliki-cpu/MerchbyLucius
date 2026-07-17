import { BrowserRouter, Routes, Route } from "react-router";

import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import VerifyEmail from "./VerifyEmail";
import VerificationSuccess from "./VerificationSuccess";
import ForgotPassword from "./ForgotPassword";
import CreateNewPassword from "./CreateNewPassword";
import PasswordChanged from "./PasswordChanged";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<LoginPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/verify-email" element={<VerifyEmail/>}/>
          <Route path="/dashboard" element={<VerificationSuccess/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<CreateNewPassword/>}/>
          <Route path="/changed-password" element={<PasswordChanged/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
