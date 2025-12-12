import React from 'react';
import PaymentSummary from '../components/PaymentSummary';
import PaymentMethodTabs from '../components/PaymentMethodTabs';
import SecureBadgeFooter from '../components/SecureBadgeFooter';

const GovPayHeader = () => (
  <header className="border-b bg-white py-4 mb-8">
    <div className="container mx-auto px-4 flex justify-center items-center">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="#3b82f6" className="w-6 h-6">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
        <span className="font-bold text-lg text-gray-900">GovPay Secure Payment</span>
      </div>
    </div>
  </header>
);

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <GovPayHeader />

      <main className="flex-1 container mx-auto px-4 max-w-xl pb-10">
        <PaymentSummary />
        <PaymentMethodTabs />
        <SecureBadgeFooter />
      </main>
    </div>
  );
};

export default PaymentPage;
