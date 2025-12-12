import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ChooseNumber from "./pages/ChooseNumber";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose-number" element={<ChooseNumber />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  
  );
}

export default App;

