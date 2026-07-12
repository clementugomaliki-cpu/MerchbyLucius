import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Navbar";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        
      </BrowserRouter>
    </div>
  )
}