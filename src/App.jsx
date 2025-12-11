import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EligibilityPage from './features/eligibility/pages/EligibilityPage';
import PaymentPage from './features/payment/pages/PaymentPage';
import PaymentSuccessPage from './features/payment/pages/PaymentSuccessPage';

import QrDeliveryPage from './features/wallet/pages/QrDeliveryPage';
import ActivationPage from './features/wallet/pages/ActivationPage';
import ActivationSuccessPage from './features/wallet/pages/ActivationSuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EligibilityPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/success" element={<PaymentSuccessPage />} />
        <Route path="/wallet/qr-delivery" element={<QrDeliveryPage />} />
        <Route path="/wallet/activation" element={<ActivationPage />} />
        <Route path="/wallet/activation-success" element={<ActivationSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;