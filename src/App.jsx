

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import EligibilityPage from './pages/EligibilityPage';
import EligibilitySuccessPage from './pages/EligibilitySuccessPage';
import EligibilityFailurePage from './pages/EligibilityFailurePage';

import PaymentPage from './pages/PaymentPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentFailurePage from './pages/PaymentFailurePage';
import React from "react";
import LandingPage from "./pages/landingPage";
import ChooseNumber from "./pages/ChooseNumber";
import LoginPage from "./pages/LoginPage";
import ActivateESIM from "./pages/QRScanPage";

function App() {
  return (
    <Routes>
      <Route path="/eligibility" element={<EligibilityPage />} />
      <Route path="/eligibility/success" element={<EligibilitySuccessPage />} />
      <Route path="/eligibility/failure" element={<EligibilityFailurePage />} />
      <Route path="/qr-scan" element={<ActivateESIM />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/payment/success" element={<PaymentSuccessPage />} />
      <Route path="/payment/failure" element={<PaymentFailurePage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/choose-number" element={<ChooseNumber />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;


