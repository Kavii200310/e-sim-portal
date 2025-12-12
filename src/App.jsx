

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EligibilityPage from './features/eligibility/pages/EligibilityPage';
import PaymentPage from './features/payment/pages/PaymentPage';
import PaymentSuccessPage from './features/payment/pages/PaymentSuccessPage';
import PaymentFailurePage from './features/payment/pages/PaymentFailurePage';

import QrDeliveryPage from './features/wallet/pages/QrDeliveryPage';
import ActivationPage from './features/wallet/pages/ActivationPage';
import ActivationSuccessPage from './features/wallet/pages/ActivationSuccessPage';


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ChooseNumber from "./pages/ChooseNumber";
import LoginPage from "./pages/LoginPage";
import "./App.css";


function App() {
  return (

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EligibilityPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/success" element={<PaymentSuccessPage />} />
        <Route path="/payment/failure" element={<PaymentFailurePage />} />
        <Route path="/wallet/qr-delivery" element={<QrDeliveryPage />} />
        <Route path="/wallet/activation" element={<ActivationPage />} />
        <Route path="/wallet/activation-success" element={<ActivationSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );


    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose-number" element={<ChooseNumber />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  
  );


export default App;

