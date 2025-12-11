import React from 'react';
import PaymentSummary from '../components/PaymentSummary';
import PaymentMethodTabs from '../components/PaymentMethodTabs';
import SecureBadgeFooter from '../components/SecureBadgeFooter';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-center items-center gap-2">
          {/* Using a placeholder SV for logo based on "blue logo" description */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A56DB]">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5" />
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bold text-gray-900 text-lg">GovPay Secure Payment</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow flex justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <PaymentSummary />
          <PaymentMethodTabs />
          <SecureBadgeFooter />
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;