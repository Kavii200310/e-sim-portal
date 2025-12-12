import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChooseNumber from "./pages/ChooseNumber";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/choose-number" element={<ChooseNumber />} />
    </Routes>
  );
}

export default App;

