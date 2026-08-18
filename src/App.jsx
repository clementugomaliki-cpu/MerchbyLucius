import { BrowserRouter, Routes, Route } from "react-router";

import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import VerifyEmail from "./VerifyEmail";
import VerificationSuccess from "./VerificationSuccess";
import ForgotPassword from "./ForgotPassword";
import CreateNewPassword from "./CreateNewPassword";
import PasswordChanged from "./PasswordChanged";
import Dashboard from "./Dashboard";
import CreatorForm from "./CreatorForm";
import Purchases from "./Purchases";
import Activity from "./Activity";
import Settings from "./Settings";
import CreatorDashboard from "./CreatorDashboard";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<LoginPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/verify-email" element={<VerifyEmail/>}/>
          <Route path="/verify-success" element={<VerificationSuccess/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<CreateNewPassword/>}/>
          <Route path="/changed-password" element={<PasswordChanged/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/creator-register" element={<CreatorForm/>}/>
          <Route path="/dashboard/purchases" element={<Purchases/>}/>
          <Route path="/dashboard/activity" element={<Activity/>}/>
          <Route path="/dashboard/settings" element={<Settings/>}/>
          <Route path="/creator-dashboard" element={<CreatorDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
