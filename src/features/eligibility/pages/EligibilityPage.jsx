import React from 'react';
import Navbar from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EligibleStatusCard from '@/features/eligibility/components/EligibleStatusCard';
import NotEligibleStatusCard from '@/features/eligibility/components/NotEligibleStatusCard';

const EligibilityPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />

      <main className="grow flex flex-col items-center pt-16 pb-20 px-4">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Eligibility Result
          </h1>
          <p className="text-slate-500 text-lg">
            Check if you can proceed with your virtual eSIM purchase.
          </p>
        </div>

        <div className="w-full space-y-8 flex flex-col items-center">
          {/* Card 1: Eligible */}
          <EligibleStatusCard
            title="You are eligible!"
            message="Congratulations! You can now proceed to the next step to select your new number."
            buttonText="Proceed to Choose Number"
            onButtonClick={() => console.log('Proceed clicked')}
          />

          {/* Card 2: Not Eligible */}
          <NotEligibleStatusCard
            title="You are not eligible at this time."
            message="Reason: Your National ID is already associated with the maximum number of connections."
            buttonText="Contact Support"
            onButtonClick={() => console.log('Contact Support clicked')}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};


export default EligibilityPage;
