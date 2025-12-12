

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EligibilityPage from './features/eligibility/pages/EligibilityPage';
import PaymentPage from './features/payment/pages/PaymentPage';
import PaymentSuccessPage from './features/payment/pages/PaymentSuccessPage';
import QrDeliveryPage from './features/wallet/pages/QrDeliveryPage';
import ActivationPage from './features/wallet/pages/ActivationPage';
import ActivationSuccessPage from './features/wallet/pages/ActivationSuccessPage';
import PaymentFailurePage from './features/payment/pages/PaymentFailurePage';
import React from "react";
import LandingPage from "./pages/landingPage";
import ChooseNumber from "./pages/ChooseNumber";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EligibilityPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/success" element={<PaymentSuccessPage />} />
        <Route path="/payment/failure" element={<PaymentFailurePage />} />
        <Route path="/wallet/qr-delivery" element={<QrDeliveryPage />} />
        <Route path="/wallet/activation" element={<ActivationPage />} />
        <Route path="/wallet/activation-success" element={<ActivationSuccessPage />} />
           <Route path="/" element={<LandingPage />} />
        <Route path="/choose-number" element={<ChooseNumber />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


