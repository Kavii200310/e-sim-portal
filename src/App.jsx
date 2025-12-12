import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ChooseNumber from "./pages/ChooseNumber";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose-number" element={<ChooseNumber />} />
      </Routes>
    </Router>
  );
}

export default App;

